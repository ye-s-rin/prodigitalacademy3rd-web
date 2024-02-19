const express = require('express');
const router = express.Router();
const Comment = require("../models/Comment");
const { createToken, verifyToken } = require("../utils/auth");

function authenticate(req, res, next) {
    let token = req.cookies.authToken;
    let headerToken = req.headers.authorization;

    if (!token && headerToken) {
        token = headerToken.split(" ")[1];
    }

    const user = verifyToken(token);

    req.user = user;

    if (!user) {
        const error = new Error("Authorization Failed");
        error.status = 403;
        next(error);
    }
    next();
};

router.get('/:boardId', authenticate, function (req, res, next) {
    const boardId = req.params.boardId;
    console.log("comment detail: ")
    console.log(boardId);

    Comment.find({ boardId: boardId, depth: 0 })
        .populate({
            path: 'author',
            select: 'nickname'
        })
        .populate({
            path: 'comments'
        })
        .then(data => { res.json(data) })
        .catch(err => (next(err)));
});

router.get('/', authenticate, function (req, res, next) {
    Comment.find()
        .populate({
            path: 'author',
            select: 'nickname'
        })
        .then(data => { res.json(data) })
        .catch(err => (next(err)));
});

router.post('/', authenticate, (req, res, next) => {
    Comment.create({
        boardId: req.body.boardId,
        content: req.body.content,
        author: req.body.author,
        comments: req.body.comments,
        depth: req.body.depth,
    })
        .then(data => { res.json(data) })
        .catch(err => { next(err) });
});

module.exports = router;