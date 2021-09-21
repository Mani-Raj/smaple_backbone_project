// 2020-02-24
// author: maniraj

var express = require('express');

var bodyParser = require('body-parser');

var app = express(); //creating server
 
const db = require('./quries');



var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());


app.set('view engine', 'ejs'); //setting view engine for app


app.use('/assets', express.static('assets'));

// app.get("", function(req, res){
//     res.send('host working..1')
// });

app.get("", function(req, res){
    console.log("server working with empty url get");
    res.render('home');
});


// app.get('/register/submit',function(req,res){
//     console.log('Get Request obtained from Backbone.JS');

//     data = {
//         backend:"NODE.JS and Express"
//     }
//     res.writeHead(200,{'Content-Type':'application/json'});
    
//     res.write(JSON.stringify(data) + ' im from server.js ');
    
//     res.end();
// });


// app.post('/register/submit',urlencodedParser,function(req,res){
//     console.log(req.body);
//     console.log('Post Request Accepted' );
//     res.end();
// });

app.post('/register/submit',urlencodedParser,db.createUser);






app.post("/submit",urlencodedParser, db.createUser);



app.listen(3000); // listing the port 
