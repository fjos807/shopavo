const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: { type: String, required: true},
    price: { type: Number, required: true },
    description: { type: String, required: true },
    businessId: { type: String, required: true},
    quantity: { type: Number, required: true},
    type: { type: String, required: true}
});

module.exports = mongoose.model('Employee', productSchema);