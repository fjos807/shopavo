const businessModel = require('../models/business');
const businessCtrl = {};

businessCtrl.getAllBusiness = async (req, res, next) => {
    const business = await businessModel.find();
    res.json(business);
};

businessCtrl.addNewBusiness = async (req, res, next) => {
    console.log(req.body);
    const business = new businessModel({
        name: req.body.name,
        businessType: req.body.businessType,
        productsType: req.body.productsType,
        priceRange: req.body.priceRange,
        stars: req.body.stars,
        description: req.body.description,
        admins: req.body.admins,
        location: req.body.location
    });
    await business.save();
    res.json({status: 'Business created'});
};

 businessCtrl.getDataBusiness = function(){

 }

module.exports = businessCtrl;