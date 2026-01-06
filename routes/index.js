const express = require('express');
const HomeSliderModel = require('../models/Home-slider-model');
const router = express.Router();


router.get('/', async (req, res) => {

    const slider =  await HomeSliderModel.find({}).lean();

    let style = "/assets/css/frontend/style.css";
    let script = "/assets/js/frontend/script.js";

    res.render('home', {
        title: "Home Page",
        sliders: slider,
        style: style,
        script: script
    })
})


module.exports = router;