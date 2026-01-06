const express = require('express');
const HomeSliderModel = require('../models/Home-slider-model');
const { getStyles, getScripts, loadOwlCarouselStyle, loadOwlCarouselScript } = require('../public/assets/js/common');
const router = express.Router();


router.get('/', async (req, res) => {

    const slider =  await HomeSliderModel.find({}).lean();

    let style = [...getStyles(), ...loadOwlCarouselStyle()];
    let script = [...getScripts(), ...loadOwlCarouselScript()];

    res.render('home', {
        title: "Home Page",
        sliders: slider,
        style: style,
        script: script
    })
})


module.exports = router;