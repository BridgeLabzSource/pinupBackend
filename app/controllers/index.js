var express = require('express');
var app = express();
var router = express.Router();
// var useragent = require('express-useragent');

var visitors = require('./visitors');

router.use(visitors({}));
router.use('/admin',require('./adminregister'));
router.use('/admin',require('./signin'));

router.use('/user',require('./userregister'));
router.use('/user',require('./userlogin'));


// router.get('/', function(req, res) {
//     res.send('This is main controller');
// });


module.exports = router;
