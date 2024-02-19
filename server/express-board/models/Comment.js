const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    boardId: { type: mongoose.Schema.Types.ObjectId, ref: 'Board', required: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BoardComment' }],
    depth: { type: Number, required: true }
})

CommentSchema.pre('save', async function (next) {
    if (this.depth > 0) {
        this.comments = this._id;
    }
    next();
});

const Comment = mongoose.model("BoardComment", CommentSchema);
module.exports = Comment