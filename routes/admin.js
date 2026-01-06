const express = require('express');
const router = express.Router();
const homeSlider = require('../controllers/home-slider-controller');
const upload = require('../middleware/upload');

/* Home Slider Routes */
router.get('/home-slider', homeSlider.index);
router.get('/home-slider/create', homeSlider.createPage);
router.post('/home-slider/store', upload.single('image'), homeSlider.store);
router.get('/home-slider/edit/:id', homeSlider.editPage);
router.post('/home-slider/update/:id',upload.single('image'), homeSlider.update);
router.get('/home-slider/delete/:id', homeSlider.delete);

module.exports = router;
