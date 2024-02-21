const fs = require('fs');
const express = require('express');
const router = express.Router();
const Comment = require("../models/Comment");

router.post('/:campaignId/comment', (req, res, next) => {
    const campaignId = req.params.campaignId;
    const comment = req.body;

    Comment.create({
        body: comment.body,
        Campaign: campaignId,
        commentType: comment.commentType,
        userNickname: comment.userNickname,
        whenCreated: comment.whenCreated,
        commentReplys: null,
        depth: comment.depth
    })
        .then(data => { res.json(data) })
        .catch(err => { next(err) });
});

router.post('/:campaignId/comment/:commentId', (req, res, next) => {
    const campaignId = req.params.campaignId;
    const commentId = req.params.commentId;
    const comment = req.body;

    Comment.create({
        body: comment.body,
        Campaign: campaignId,
        commentType: comment.commentType,
        userNickname: comment.userNickname,
        whenCreated: comment.whenCreated,
        commentReplys: null,
        depth: comment.depth
    })
        .then(data => { res.json(data) })
        .catch(err => { next(err) });
});

router.get('/', function (req, res, next) {
    Comment.find()
        .populate('commentReplys')
        .then(data => { res.json(data) })
        .catch(err => (next(err)));
});

router.post('/', async (req, res, next) => {
    const comments = req.body;

    for (const comment of comments) {
        const recomments = [];

        for (const reply of comment.commentReplys) { // 자식 댓글 먼저 생성
            const recomment = await Comment.create({
                body: reply.body,
                Campaign: reply.Campaign,
                commentType: reply.commentType,
                userNickname: reply.userNickname || '익명',
                whenCreated: reply.whenCreated,
                commentReplys: reply.commentReplys,
                depth: reply.depth
            })
                .then(data => { recomments.push(data._id) })
                .catch(err => { next(err) });
        };

        Comment.create({
            body: comment.body,
            Campaign: comment.Campaign,
            commentType: comment.commentType,
            userNickname: comment.userNickname || '익명',
            whenCreated: comment.whenCreated,
            commentReplys: recomments,
            depth: comment.depth
        })
            .then(data => { res.json(data) })
            .catch(err => { next(err) });
    };
});

const pushComment = async (comments) => {
    for (const comment of comments) {
        const recomments = [];

        for (const reply of comment.commentReplys) { // 자식 댓글 먼저 생성
            const recomment = await Comment.create({
                body: reply.body,
                Campaign: reply.Campaign,
                commentType: reply.commentType,
                userNickname: reply.userNickname || '익명',
                whenCreated: reply.whenCreated,
                commentReplys: reply.commentReplys,
                depth: reply.depth
            })
                .then(data => { recomments.push(data._id) })
                .catch(err => { next(err) });
        };

        Comment.create({
            body: comment.body,
            Campaign: comment.Campaign,
            commentType: comment.commentType,
            userNickname: comment.userNickname || '익명',
            whenCreated: comment.whenCreated,
            commentReplys: recomments,
            depth: comment.depth
        })
            .then(data => { })
            .catch(err => { console.log(err) });
    };
};

const initComment = () => {
    const filePath = '../crawling/comment.json'
    const comments = JSON.parse(fs.readFileSync(filePath));

    pushComment(comments);
};
// initComment();

module.exports = router;