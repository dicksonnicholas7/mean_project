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
app.get("/api/blogpost", getAllPosts);
app.delete("/api/blogpost/:id", deletePost);
app.get("/api/blogpost/:id", getPostById);
app.put("/api/blogpost/:id", updatePost);


function updatePost(req,res) {

   var postId = req.params.id;
   PostModel
            .put(post);
}


function getPostById(req,res) {
   var postId = req.params.id;
   PostModel
            .findById({_id: postId})
            .then(
               function (post) {
                  res.json(post);
               },
               function(err){
                  res.sendStatus(400);
               }
            );
}


function deletePost(req,res) {
   var postId = req.params.id;
   PostModel
            .remove({_id: postId})
            .then(
               function () {
                  res.sendStatus(200);
               },
               function(){
                  res.sendStatus(400);
               }

            );
}

function getAllPosts(req,res){
    PostModel
            .find()
            .then(
                 function(posts){
                       res.json(posts);
                 },
                 function(err){
                    res.sendStatus(400);
                 }

            );

}

function createPost(req,res){
    var post = req.body; 
    console.log(post);  
    PostModel.create(post)
              .then(
                    function (postObj){
                       res.json(200);
                    },
                    function(error){
                       res.sendStatus(400);  
                    }
              );
    //res.json(post); 
} 

app.listen(7000);

console.log("started listening to port ");
