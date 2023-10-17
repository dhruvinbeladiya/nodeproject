var express = require('express');
var router = express.Router();

const user = require('../controller/userController')

/* GET home page. */
router.get('/', user.getData);
router.post('/insert', user.insert)

module.exports = router;
