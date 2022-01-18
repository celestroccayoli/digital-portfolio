const express = require('express');
const router = express.Router();
const blogController = require('../controllers/aboutController')


router.get('/' , blogController.me);
router.get('/blog' , blogController.blog);
router.get('/blog/detail/:id' , blogController.detail);
router.get('/skills' , blogController.skills);

module.exports = router