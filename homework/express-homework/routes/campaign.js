const fs = require('fs');
const express = require('express');
const router = express.Router();
const Campaign = require("../models/Campaign");

router.get('/campaign', function (req, res, next) {
    Campaign.find()
        .then(data => { res.json(data) })
        .catch(err => (next(err)));
});

router.get('/:campaignId', function (req, res, next) {
    const campaignId = req.params.campaignId;

    Campaign.find({ campaignId: campaignId })
        .then(data => { res.json(data) })
        .catch(err => (next(err)));
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