const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.send("Birds home page");
});
router.get('/about', (req, res)=>{
    res.send("About birds");
});
module.exports = router;