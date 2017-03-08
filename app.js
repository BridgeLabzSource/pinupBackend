var express = require('express'),
    app = express(),
    router = express.Router(),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    db = require('./app/model/db');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// .unless({ path: ['/users/authenticate', '/users/register'] })
app.use(require('./app/controllers'));


var port = 3000;
app.listen(port, function() {
    db.connect();
    console.log('listening on port 3000');
});
