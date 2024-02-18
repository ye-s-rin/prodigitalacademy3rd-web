const express = require('express');
const router = express.Router();
const Comment = require("../models/Comment");

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
                Campaign: reply.campaignId,
                commentType: reply.commentType,
                userNickname: reply.userNickname,
                whenCreated: reply.whenCreated,
                commentReplys: reply.commentReplys,
                depth: reply.depth
            })
                .then(data => { recomments.push(data._id) })
                .catch(err => { next(err) });
        };

        Comment.create({
            body: comment.body,
            Campaign: comment.campaignId,
            commentType: comment.commentType,
            userNickname: comment.userNickname,
            whenCreated: comment.whenCreated,
            commentReplys: recomments,
            depth: comment.depth
        })
            .then(data => { res.json(data) })
            .catch(err => { next(err) });
    };
});

// router.put('', (req, res, next) => {
//     console.log(req.body);
//     const id = req.body.id;
//     const title = req.body.title;
//     const content = req.body.content;

//     Board.findById(id).then(data => {
//         data.title = title;
//         data.content = content;
//         data.save().then(data => {
//             return res.json(data)
//         })
//     })
// });

// router.dcampaignete('/', (req, res, next) => {
//     console.log("request body: ", req.body);
//     const id = req.body.id;

//     Board.findByIdAndDcampaignete(id)
//         .then(data => { res.json(data) })
//         .catch(err => { next(err) });
// });

module.exports = router;