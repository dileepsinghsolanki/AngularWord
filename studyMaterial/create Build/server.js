var express = require('express'),
    cookieParser = require('cookie-parser'),
    path = require('path'),
    bodyParser = require('body-parser'),
    http = require('http'),
    app = express();

app.set('view',__dirname+'/views');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({limit: '500mb'}));


app.use('/', express.static(path.join(__dirname,'/dist')));

//Start Server
app.listen(3004, function(){
    console.log('>>>3004')
});