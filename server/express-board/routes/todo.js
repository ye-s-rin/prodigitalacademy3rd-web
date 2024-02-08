const express = require('express');
const router = express.Router();
const Todo = require("../models/Todo");

// router.get('/:text', function(req, res, next){
//     Todo.find(req.params.text)
//     .then(data=>{res.json(data)})
//     .catch(err=>{next(err)});
// });

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
    console.log("request body: ",req.body);
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
    console.log(req.body);
    const id=req.body.id;
    const todo=req.body.todo;
    const color=req.body.color;

    Todo.findById(id).then(data=>{
        data.todo = todo;
        data.color = color;
        data.save().then(data=>{
            return res.json(data)
        })
    })
});

module.exports = router;