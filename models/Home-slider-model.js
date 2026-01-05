const mongoose = require('mongoose');

const homeSliderSchema = new mongoose.Schema({
    title: String,
    link: String,
    image: String,
    status: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

module.exports = mongoose.model('HomeSlider', homeSliderSchema);
