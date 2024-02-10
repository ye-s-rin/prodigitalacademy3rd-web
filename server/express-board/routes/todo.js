const express = require('express');
const router = express.Router();
const Todo = require("../models/Todo");
const {createToken, verifyToken} = require("../utils/auth");

async function authenticate(req, res, next) {
    let token = req.cookies.authToken;
    let headerToken = req.headers.authorization;

    if (!token && headerToken) {
      token = headerToken.split(" ")[1];
    }
  
    const user = verifyToken(token);

    req.user = user;
    
    if (!user) {
      const error = new Error("Authorization Failed");
      error.status = 403;
      next(error);
    }
    next();
  };

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

router.get('/', authenticate, async function(req, res, next){
    console.log(req);
    
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