const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    body: { type: String, required: true },
    Campaign: { type: Number, ref: 'Campaign', field: 'campaignId' },
    commentType: { type: String },
    userNickname: { type: String, required: true },
    whenCreated: { type: Date, default: Date.now },
    commentReplys: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    depth: { type: Number, required: true }
})

CommentSchema.pre('save', async function (next) {
    if (this.depth > 0) {
        this.commentReplys = this._id;
    }
    next();
});

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment