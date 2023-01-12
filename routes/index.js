const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/',homeController.home);
router.use('/create',require('./create'));
router.use('/delete',require('./delete'));

module.exports = router;