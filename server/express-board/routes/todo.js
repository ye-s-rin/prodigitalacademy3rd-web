const express = require('express');
const router = express.Router();
const Todo = require("../models/Todo");

router.post('/', (req, res, next)=>{
    console.log(req.body);
    Todo.create({
        todo: req.body.todo,
        color: req.body.color,
    })
    .then(data=>{res.json(data)})
    .catch(err=>{next(err)});
});

router.delete('/', async (req, res, next) => {
    const id = req.body.id;

    Todo.findByIdAndDelete(id)
    .then(data=>{res.json(data)})
    .catch(err=>{next(err)});
});

router.get('/', function(req, res, next){
    Todo.find()
    .then(data=>{res.json(data)})
    .catch(err=>{next(err)});
});

router.put('/', (req, res, next) => {
    const id=req.body.id;
    const commentId=req.body.commentId;
    const comment=req.body.comment;
    console.log(id, commentId, comment);

    Todo.findById(id).then(data=>{
        data.comments[commentId] = comment;
        data.save().then(data=>{
            return res.json(data)
        })
    })
});


module.exports = router;