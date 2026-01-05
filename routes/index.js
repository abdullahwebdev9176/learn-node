const express = require('express');
const HomeSliderModel = require('../models/Home-slider-model');
const router = express.Router();


router.get('/', async (req, res) => {

    const slider =  await HomeSliderModel.find({});

    console.log(slider);

    res.render('home', {
        title: "Home Page",
        name: "Muhamm Abdullah",
        sliders: slider
    })
})






module.exports = router;