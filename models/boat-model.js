const mongoose = require('mongoose');

const boatSchema = new mongoose.Schema({
    feedId: { type: String, unique: true, required: true },
    boatTitle: String,
    condition: String,
    make: String,
    model: String,
    year: String,
    length: String,
    description: String,
    price: String,
    msrp: String,
    class: String,
    location: String,
    enginehours: String,
    hull_Id: String,
    fuel_type: String,
    engineModel: String,
    beam: String,
    productImage: String,
    boat_gallery: [String],
}, { timestamps: true });

module.exports = mongoose.model('Boat', boatSchema);
