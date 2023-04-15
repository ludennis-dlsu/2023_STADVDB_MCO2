const router = require('express').Router();
module.exports = router;

const mainController = require('../controller/mainController');

router.get('/', mainController.getHomePage);