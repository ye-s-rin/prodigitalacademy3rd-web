const mongoose = require("mongoose");

const CampaignSchema = new mongoose.Schema({
    campaignId: { type: String, required: true },
    categoryName: { type: String },
    title: { type: String },
    totalBackedAmount: { type: Number },
    photoUrl: { type: String },
    nickname: { type: String },
    coreMessage: { type: String },
    whenOpen: { type: String }, // type: Date
    achievementRate: { type: Number },
})

const Campaign = mongoose.model("Campaign", CampaignSchema);
module.exports = Campaign