// const express=require("express");
// const bodyParser= require("body-parser");

// var app=express();

// app.set('view engine', 'ejs');
// app.use(express.urlencoded({extended:true}));

// var example="working";

// app.get("/",function(req,res){
//     res.render('list',{exej : example});
// });

// app.post("/",function(req ,res){
//  console.log(req.body.e1e1);
// });

// app.listen(3000,function(){
//     console.log("server Started");
// });
const express = require("express");
const bodyParser = require("body-parser");



var app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

var example = "working";
var items=[];
app.get("/", function (req, res) {
    res.render('list', { ejes: items }); // Corrected the variable name to 'exej'
});

app.post("/", function (req, res) {
   var item=req.body.e1e1;
   items.push(item);
   res.redirect("/");
});

app.listen(4000, function () {
    console.log("server Started");
});
