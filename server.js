var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    request = require('request'),
    http = require('http').Server(app),
    Comment = require('./comments.js'),
    app = express();

    mongoose.connect('mongodb://localhost/CheqMarqApp', function (err) {
      if(err){
        console.log(err);
      } else {
        console.log('connection successful - server');
      }
    });

    app.use(bodyParser());
    app.use(express.static(__dirname + '/public'));

  app.get('/comments',function (req,res) {
    res.sendfile("index.html");
  });

app.get('/comments', function (req,res) {
  Comment.find().exec(function(err, comments) {
      if (err) return next(err);
      res.send(comments);
    });;
})


   app.post('/comments', function(req, res) {
     console.log(req.body)
     var comment = new Comment(req.body);
     comment.save(function(err) {
       if (err) {
         console.log(err);
       } else {
         console.log(comment)
         res.send(comment)
       }
     });
   });


app.listen(8080);
     console.log("App listening on port 8080");
