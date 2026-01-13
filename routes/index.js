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

// router.all(
//   '/:type(new-boats-for-sale|used-pre-owned-boats-for-sale|boats-for-sale)/:page?',
//   async (req, res) => {
//     try {
//       const { type, page } = req.params;

//       let filter = {};
//       let title = "Boats For Sale";

//       // URL ke hisaab se filter & title
//       if (type === "new-boats-for-sale") {
//         filter.newUsed = "N";
//         title = "New Boats For Sale";
//       }

//       if (type === "used-pre-owned-boats-for-sale") {
//         filter.newUsed = "U";
//         title = "Used Boats For Sale";
//       }

//       // Pagination
//       const limit = 12;
//       const currentPage = parseInt(page) || 1;
//       const skip = (currentPage - 1) * limit;

//       const boats = await BoatModel
//         .find(filter)
//         .skip(skip)
//         .limit(limit)
//         .lean();

//       const total = await BoatModel.countDocuments(filter);
//       const totalPages = Math.ceil(total / limit);

//       let style = [...getStyles(), ...loadOwlCarouselStyle()];
//       let script = [...getScripts(), ...loadOwlCarouselScript()];

//       res.render('boats', {
//         title,
//         boats,
//         currentPage,
//         totalPages,
//         style,
//         script,
//         type
//       });

//     } catch (err) {
//       console.error(err);
//       res.status(500).send("Server Error");
//     }
//   }
// );

module.exports = router;