const product = require('../models/product');
const productCtrl = {};

productCtrl.getAllProducts = (req, res) => {
    res.json({
        status: 'List of all products'
    });
};

module.exports = productCtrl;