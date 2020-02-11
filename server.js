var express = require ('express');
var bodyParser = require('body-parser')

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/blogpost", createPost);

function createPost(req,res){
    var post = req.body;
    console.log(post);  
}


app.listen(7000);

console.log("started listening to port ");
