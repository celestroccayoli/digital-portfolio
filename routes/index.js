const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController')

router.get('/' , homeController.home);
 router.get('/list' , homeController.list);
 router.get('/galery' , homeController.galery);

module.exports = router