const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.get('/' , userController.home);
router.get('/list' , userController.list);
router.get('/form' , userController.form);
router.post('/process' , userController.process);

module.exports = router