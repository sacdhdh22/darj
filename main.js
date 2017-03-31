var express=require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'free-template')));
//page to be loaded when server runs
app.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname,'free-template', 'index.html'));
});
app.listen(3000);