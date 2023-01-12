const express = require('express');
const router  = express.Router();
const deleteController = require('../controllers/deleteController');


router.get('/delete_todo',deleteController.delete_todo);


module.exports = router;