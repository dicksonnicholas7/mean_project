var express = require ('express');
var bodyParser = require('body-parser')
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/meanblog');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var PostSchema = mongoose.Schema({
    title: {type:String, required:true},
    body: String,
    posted:{type:Date, default:Date.now}
}, {collection:'post'});

var PostModel = mongoose.model("PostModel", PostSchema);

app.post("/api/blogpost", createPost);

function createPost(req,res){
    var post = req.body;
    console.log(post);  
    PostModel.create(post);
    res.json(post);
} 




app.listen(7000);

console.log("started listening to port ");
