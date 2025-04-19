const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render('./themes/material/home');
});

router.get("/about", (req, res) => {
    res.render('./themes/material/about');
});

router.get("/contact", (req, res) => {
    res.render('./themes/material/contact');
});

router.get("/team", (req, res) => {
    res.render('./themes/material/team');
});

router.use((req, res) => {
    res.render('./themes/material/404');
});

module.exports = router;
