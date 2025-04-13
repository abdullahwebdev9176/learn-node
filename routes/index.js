const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render('home');
});

router.get("/about", (req, res) => {
    res.render('about');
});

router.get("/contact", (req, res) => {
    res.render('contact');
});

router.get("/team", (req, res) => {
    res.render('team');
});

router.use((req, res) => {
    res.render('404');
});

module.exports = router;
