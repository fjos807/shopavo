const Product = require('../models/product');
const productCtrl = {};

productCtrl.getAllProducts = async (req, res) => {
    const product = await Product.find();
    res.json(product);
};

productCtrl.getProductsByBusiness = async (req, res) => {
    const { businessId } = req.params;
    const route = await product.findById(id);
    res.json(product);
}

module.exports = productCtrl;