const express = require('express');
const HomeSliderModel = require('../models/Home-slider-model');
const { getStyles, getScripts, loadOwlCarouselStyle, loadOwlCarouselScript } = require('../public/assets/js/common');
const BoatModel = require('../models/Boat-model');
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

// router.get('/boats-for-sale', async (req, res) => {

//      

//     console.log(boats);

//     let style = [...getStyles(), ...loadOwlCarouselStyle()];
//     let script = [...getScripts(), ...loadOwlCarouselScript()];

//     res.render('boats', {
//         title: "Boats For Sale",
//         boats: boats,
//         style: style,
//         script: script
//     })
// })

router.get('/boats-for-sale', async (req, res) => {

    const boats = await BoatModel.find({}).lean();

    res.render('boats', {
        title: "Boats For Sale",
        boats: boats,
        style: getStyles(),
        script: getScripts()
    })
});

router.get('/boats-details/:id', async (req, res) => {

    const { id } = req.params;

    if(id.endsWith('.map')) return res.status(404).send("Not Found");

    const boats = await BoatModel.findById(id).lean();

    res.render('boat-details', {
        title: "Boat Details",
        boats: boats,
        style: getStyles(),
        script: getScripts()
    })
});

module.exports = router;