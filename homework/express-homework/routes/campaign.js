const fs = require('fs');
const express = require('express');
const router = express.Router();
const Campaign = require("../models/Campaign");
const Comment = require("../models/Comment");

router.get('/campaign', function (req, res, next) {
    Campaign.find()
        .then(data => { res.json(data) })
        .catch(err => (next(err)));
});

router.post('/:campaignId/comment/:commentId', async (req, res, next) => {
    const campaignId = req.params.campaignId;
    const commentId = req.params.commentId;
    const comment = req.body;
    let recommentId;

    await Comment.create({
        body: comment.body,
        Campaign: campaignId,
        commentType: comment.commentType,
        userNickname: comment.userNickname || "익명",
        whenCreated: comment.whenCreated,
        commentReplys: [],
        depth: comment.depth
    })
        .then(data => { recommentId = data._id })
        .catch(err => { console.log("recomment error: ", err) });

    Comment.findOneAndUpdate(
        { _id: commentId },
        { $push: { commentReplys: recommentId } }
    )
        .then(data => res.json(data))
        .catch(err => { console.log("comment error: ", err) });
});

router.post('/:campaignId/comment', (req, res, next) => {
    const campaignId = req.params.campaignId;
    const comment = req.body;

    Comment.create({
        body: comment.body,
        Campaign: campaignId,
        commentType: comment.commentType,
        userNickname: comment.userNickname || "익명",
        whenCreated: comment.whenCreated,
        commentReplys: [],
        depth: comment.depth
    })
        .then(data => { res.json(data) })
        .catch(err => { next(err) });
});

router.get('/:campaignId', function (req, res, next) {
    const campaignId = req.params.campaignId;

    Campaign.find({ campaignId: campaignId })
        .then(campaign => {
            Comment.find({ Campaign: campaignId, depth: 0 })
                .populate('commentReplys')
                .then(comments => {
                    res.json({ campaign: campaign, comments: comments });
                })
                .catch(err => {
                    next(err);
                });
        })
        .catch(err => {
            next(err);
        });
});

router.post('/', (req, res, next) => {
    const campaigns = req.body;

    for (const campaign of campaigns) {
        Campaign.create({
            campaignId: campaign.campaignId,
            categoryName: campaign.categoryName,
            title: campaign.title,
            totalBackedAmount: campaign.totalBackedAmount,
            photoUrl: campaign.photoUrl,
            nickname: campaign.nickName,
            coreMessage: campaign.coreMessage,
            whenOpen: campaign.whenOpen,
            achievementRate: campaign.achievementRate,
        })
            .then(data => { res.json(data) })
            .catch(err => { next(err) });
    };
});

const initCampaign = () => {
    const filePath = '../crawling/campaign.json'
    const campaigns = JSON.parse(fs.readFileSync(filePath));

    Campaign.insertMany(campaigns)
        .then(data => console.log("init Campaign"))
        .catch(err => console.log(err));
};
// initCampaign();

module.exports = router;