const express = require('express');

const router = express.Router();


router.get("/",(req, resp)=>{
    resp.render('home')
})

module.exports = router;
