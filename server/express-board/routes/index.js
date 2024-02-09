var express = require('express');
var router = express.Router();

/* GET cookie*/
router.get('/', async function (req, res, next) {
  // 쿠키 읽기
  console.log(req.cookies);

  // 쿠키 쓰기
  res.cookie('cookieName2', 'cookieValue', {
    maxAge: 1000 * 60 * 60 *24, // 밀리초 (하루)
    httpOnly: true, // JS 접근 불가(프론트에서 접근 못하도록)
    secure: false, // HTTPS 프로토콜만 쿠키 사용 가능
    signed: false // 서명 여부 (HTTPS)
  });
  res.send("board")

});

module.exports = router;
