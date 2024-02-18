const express = require('express');
const router = express.Router();
const Campaign = require("../models/Campaign");

router.get('/', function (req, res, next) {
    Campaign.find()
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