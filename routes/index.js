const express = require('express');
const HomeSliderModel = require('../models/Home-slider-model');
const router = express.Router();


router.get('/', async (req, res) => {

    const slider =  await HomeSliderModel.find({}).lean();

    res.render('home', {
        title: "Home Page",
        sliders: slider
    })
})


module.exports = router;