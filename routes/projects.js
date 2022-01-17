const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projectsController')

router.get('/' , projectsController.home);
router.get('/list' , projectsController.list);
router.get('/galery' , projectsController.galery);
module.exports = router