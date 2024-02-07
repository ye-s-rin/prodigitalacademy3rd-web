const mongoose = require('./Mongoose.js');

const TodoSchema = new mongoose.Schema({
    todo: {type:String, required: true},
    color: {type:String, required: true},
})
const Todo = mongoose.model("Todo", TodoSchema);
module.exports = Todo