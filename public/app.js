var myApp = angular.module("BlogApp", []);
myApp.controller('BlogController', ['$scope', '$http', function($scope, $http){
$scope.createPost = createPost;
$scope.deletePost = deletePost;
$scope.getPostById = getPostById;
$scope.updatePost = updatePost;

function init(){
    getAllPosts();
}

init();


function updatePost(post) {
    $http
        .put("/api/blogpost/"+post._id, post);
}

function getPostById(postId) {
    $http
        .get("/api/blogpost/"+postId)
        .success(
            function(post) {
                $scope.post = post;
            }
        );

}

function deletePost(postId){
   $http
        .delete("/api/blogpost/"+postId)
        .success(getAllPosts)
}

 
function getAllPosts(){
    $http
          .get("/api/blogpost")
          .success(function(posts){
                $scope.posts=posts;
          });
}

function createPost(post){
    console.log(post); 
    $http
    .post("/api/blogpost", post) 
    .success(getAllPosts);
}
}]);

 