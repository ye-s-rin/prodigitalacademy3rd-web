const express = require('express');
const router = express.Router();
const Todo = require("../models/Todo");
const {createToken, verifyToken} = require("../utils/auth");

function authenticate(req, res, next) {
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

// 한글 문자를 초성으로 변환하는 함수
function convertToConsonant(text) {
    const consonantArray = [
        'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ',
        'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
    ];

    let result = '';
    for (let i = 0; i < text.length; i++) {
        const code = text.charCodeAt(i) - 44032;
        if (code > -1 && code < 11172) {
            const choIdx = Math.floor(code / 588);
            result += consonantArray[choIdx];
        } else {
            result += text.charAt(i);
        }
    }
    return result;
}


router.post('/', authenticate, (req, res, next)=>{
    console.log(req.body);
    Todo.create({
        todo: req.body.todo,
        color: req.body.color,
        consonant: convertToConsonant(req.body.todo),
    })
    .then(data=>{res.json(data)})
    .catch(err=>{next(err)});
});

router.delete('/', authenticate, (req, res, next) => {
    console.log("request body: ",req.body);
    const id = req.body.id;

    Todo.findByIdAndDelete(id)
    .then(data=>{res.json(data)})
    .catch(err=>{next(err)});
});

router.get('/:search', authenticate, function(req, res, next){
    const search = req.params.search;
    
    // Todo.find({ todo: search }) // 동등 검색
    // Todo.find({ todo: { $regex: search, $options: 'i' } }) // 포함 검색
    Todo.find({ consonant: { $regex: search, $options: 'i' } }) // 자음 검색
    .then(data=>{res.json(data)})
    .catch(err=>{next(err)});
});

router.get('/', authenticate, function(req, res, next){
    console.log(req.user);
    
    Todo.find()
    .then(data=>{res.json(data)})
    .catch(err=>{next(err)});
});

router.put('/', authenticate, (req, res, next) => {
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