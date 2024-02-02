const express = require('express');
const router = express.Router();
const Board = require("../models/Board");

router.get('/', function(req, res, next){
    res.send("This is routes/board.js");
});

router.post('/', (req, res, next)=>{
    console.log(req.body);
    Board.create(req.body)
    .then(data=>{
        res.json(data);
    }).catch(err=>{next(err)});
});

module.exports = router;