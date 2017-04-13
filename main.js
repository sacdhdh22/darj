var express=require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'free-template')));
app.use(express.static(path.join(__dirname, 'public')));
//page to be loaded when server runs
app.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname,'free-template', 'index.html'));
});
app.get('/sikkim', function(req, res, next) {
console.log("we are here");
  res.sendFile(path.join(__dirname,'free-template', 'views', 'sikkim.html'));

});

app.get('/darjeeling', function(req, res, next) {
  res.sendFile(path.join(__dirname,'free-template', 'views', 'darjeeling.html'));
});
app.listen(process.env.PORT || 5000);