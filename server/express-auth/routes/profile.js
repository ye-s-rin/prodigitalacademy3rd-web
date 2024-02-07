const express = require("express");

const router = express.Router();
router.get("/:paramId", (req, res, next) => {
    console.log(req.session);

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

module.exports = router;