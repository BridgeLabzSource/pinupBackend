var express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    db = require('./app/model/db'),
    cookie = require('cookie-parser');



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// app.use(cookie('my cookie'));
// app.all('/*',function(req,res,next){
//   console.log('inside /  ');
//   console.log('req ',req.cookies);
// if (!req.cookies)
// {
// // no: set a new cookie
// // res.cookie('pincookie','random', { maxAge: 90000, httpOnly: true });
// // res.send("cookie created");
// console.log('cookie created successfully');
// }
// else
// {
//   res.clearCookie('pincookie');
//   // console.log(req.headers);
// // yes, cookie was already present
// console.log('cookie exists', req.cookies);
// // res.send("cookie exist");
//
// }
//
// next();
// });

app.use(require('./app/controllers'));
// clear cookie  using nodejs

var port = 3030;
app.listen(port, function() {
    db.connect();
    console.log('listening on port 3000');
});
