const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    content: {type:String, required: true},
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
})
const Board = mongoose.model("Comment", CommentSchema);
module.exports = Board