const mongoose = require('mongoose');
const { Schema } = mongoose;

const businessSchema = new Schema({
    name: { type: String, required: true},
    businessType: { type: String, required: true },
    productsType: { type: Array, required: true },
    priceRange: { type: String, required: true},
    stars: { type: Number, required: true},
    description: { type: String, required: true},
    admins: { type: Array, required: true},
    location: { type: Array, required: true}
});

module.exports = mongoose.model('Business', businessSchema);