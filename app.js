var express = require("express");
var cors = require("cors");
var favicon = require('static-favicon');
var logger = require("morgan");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
//X-Frame-options
var xFrameOptions = require('x-frame-options');
var config = require("./config/database");
var path =require("path");

var user = require("./routes/user");
var product = require("./routes/product");
var index = require("./routes/index");
var comment = require("./routes/comment");
//Connect mongodb data
/*mongoose.connect(config.database);
mongoose.connection.on("connected",function(){
  console.log("connected" + config.database);
});
mongoose.connection.on("error",function(err){
  console.log("connected error" + err);
});*/

var app =express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
// LOCALHOST:3000
var port = 3000;

//CORS Middleware
app.use(cors());
//X-Frame-option
app.use(xFrameOptions());
//MORGAN middleware
app.use(logger());

//Body Parser Middleware
app.use(bodyParser.json());

app.use("/product",product);
app.use("/comment",comment);
app.use("/user",user);
app.use("/",index);
app.use("*",function(req,res){
  res.render('index');
});

io.on('connection', (socket) => {
  console.log('The user is connected');
  socket.on('disconnect', function(){
    console.log('The user is disconnected');
  });
   socket.on('add-message', function(data){
    io.emit('message', {text: data.message, web: data.web});   
    //console.log(data.message);
  });
});
http.listen(process.env.PORT || port,function(req,res){
  console.log("connect");
});