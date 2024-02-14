const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    body: { type: String, required: true },
    Campaign: { type: mongoose.Schema.Types.ObjectId, ref: 'Campaign', required: true },
    commentType: { type: String },
    userNickname: { type: String },
    whenCreated: { type: Date }, // type: Date
    commentReplies: [this],
    depth: { type: Number }
})

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment