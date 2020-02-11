var express = require ('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.post("/api/blogpost", createPost);

function createPost(req,res){

    console.log("hello from server");
}


app.listen(7000);

console.log("started listening to port ");
