const express = require('express');
const router = express.Router();
const Board = require("../models/Board");

router.get('/', function(req, res, next){
    Board.find()
    .then(data=>{res.json(data)})
    .catch(err=>{next(err)});
});

router.get('/:id', function(req, res, next) {
    Board.findById(req.params.id)
        .then(data => res.json(data))
        .catch(err => next(err));
});
// http://localhost:3000/board/65bc8672abfdd994c17504a7

router.post('/', (req, res, next)=>{
    console.log(req.body);
    Board.create(req.body)
    .then(data=>{
        res.json(data);
    }).catch(err=>{next(err)});
});

module.exports = router;