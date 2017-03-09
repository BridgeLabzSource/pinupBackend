var express = require('express');
var app = express();
var router = express.Router();


router.use('/admin',require('./adminregister'));
router.use('/admin',require('./signin'));
router.use('/admin',require('./topic'));
router.use('/user',require('./userregister'));
router.use('/user',require('./userlogin'));

router.get('/', function(req, res) {
    res.send('This is main controller');
});


module.exports = router;
