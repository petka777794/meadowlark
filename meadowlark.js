var express = require('express');
var __dirname = 'C:/Users/User';
var app = express();

var handlebars = require('express-handlebars').create({ defaultLayout : 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function(){
    console.log('Express was exeecuted on http://localhost:' +
        app.get('port') + '; press Ctrl+C for stop');
});

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('home');
});

app.get('/about', function(req, res){
    res.render('about');
});

app.use(function(req, res, next){
    res.status(404);
    res.render('404');
});
app.use(function(req, res, next){
    res.status(500);
    res.render('500');
});
