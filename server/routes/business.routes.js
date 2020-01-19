const express = require('express');
const router = express.Router();
const businessController = require('../controllers/business.controller');

router.get('/', businessController.getAllBusiness);
router.post('/', businessController.addNewBusiness);

module.exports = router;