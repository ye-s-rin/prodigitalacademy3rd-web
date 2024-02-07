const express = require('express');
const router = express.Router();
const Board = require("../models/Board");

router.get("/:paramId", (req, res, next) => {
    if (!req.session.viewCount) {
        req.session.viewCount = 0;
    };
    req.session.viewCount++;

    if (!req.session.path) {
        req.session.path = [];
    };
    req.session.path.push(req.params.paramId);

    res.send("session test");
});

router.put('/', (req, res, next) => {
    const id=req.body.id;
    const commentId=req.body.commentId;
    const comment=req.body.comment;
    console.log(id, commentId, comment);

    Board.findById(id).then(data=>{
        data.comments[commentId] = comment;
        data.save().then(data=>{
            return res.json(data)
        })
    })
});

// 댓글 추가를 위한 POST 라우터
router.post('/', async (req, res, next) => {
    try {
        const { id, comment } = req.body;

        // 해당 게시물의 comments 배열 맨 앞에 댓글 추가
        const updatedBoard = await Board.findByIdAndUpdate(
            id,
            { $push: { comments: { $each: [comment], $position: 0 } } },
            { new: true }
        );

        res.json(updatedBoard);
    } catch (err) {
        next(err);
    }
});

router.get('/', function(req, res, next){
    Board.find()
    .then(data=>{res.json(data)})
    .catch(err=>{next(err)});
});

router.delete('/', async (req, res, next)=>{
    const id=req.body.id;
    const commentId=req.body.commentId;

    Board.findById(id).then(data=>{
        data.comments.splice(commentId,1)
        data.save().then(data=>{
            return res.json(data)
        })
    })

    // await Board.findByIdAndUpdate(
    //     id,
    //     { $unset: { [`comments.${commentId}`]: 1 } },
    //     { new: true }
    // )
    // .then(data=>{
    //     console.log("delete in router: "+data)
    //     res.json(data)
    // })
    // .catch(err=>{
    //     console.error(err)
    //     next(err)});
})

// router.get('/:id', function(req, res, next) {
//     Board.findById(req.params.id)
//         .then(data => res.json(data))
//         .catch(err => next(err));
// });
// // http://localhost:3000/board/65bc8672abfdd994c17504a7

// router.post('/', (req, res, next)=>{
//     console.log(req.body);
//     Board.create(req.body)
//     .then(data=>{
//         res.json(data);
//     }).catch(err=>{next(err)});
// });

// router.post('/', (req, res, next)=>{
//     Board.create({
//         title: req.body.title,
//         content: req.body.content,
//         author: req.body.author || 'Anonymous'
//     })
//     .then(data=>{
//         res.json(data);
//     }).catch(err=>{next(err)});
// });

// router.put('/:id', (req, res, next)=>{
//     Board.updateOne({title: '제목'}, {title: '제목2'})
//     .then(data=>{res.json(data)})
//     .catch(err=>{next(err)});
// });

// router.delete('/:id', (req, res, next)=>{
//     Board.deleteOne({title: '제목2'})
//     .then(data=>{res.json(data)})
//     .catch(err=>{next(err)});
// })

module.exports = router;