const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    todo: {type:String, required: true},
    color: {type:String, required: true},
    consonant: {type:String, required: true}, // 초성 데이터를 저장할 필드 추가
})
const Todo = mongoose.model("Todo", TodoSchema);
module.exports = Todo