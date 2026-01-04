const express = require('express');
const router = express.Router();

router.get("/home-slider", (req, res) => {
    res.render('home-slider');
});


module.exports = router;
