const mongoose = require('mongoose');

const boatSchema = new mongoose.Schema({
    feedId: { type: String, unique: true }, 
    boatTitle: String,
    newUsed: String,
    make: String,
    model: String,
    year: String,
    length: String,
    description: String,
    featuredUnit: String,
    salePrice: String,
    msrp: String,
    discount: String,
    class: String,
    location: String,
    hours: String,
    hullType: String,
    fuelType: String,
    engineMake: String,
    engineModel: String,
    engineHorsepower: String,
    power: String,
    beam: String,
    productImage: String,
}, { timestamps: true });

module.exports = mongoose.model('Boat', boatSchema);
