const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController')

router.get('/' , blogController.home);
router.get('/list' , blogController.list);
router.get('/galery' , blogController.galery);

module.exports = router