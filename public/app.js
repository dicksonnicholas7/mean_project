var myApp = angular.module("BlogApp", []);
myApp.controller('BlogController', ['$scope', '$http', function($scope, $http){
$scope.createPost = createPost;
 

function init(){
    getAllPosts();
}

init();



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

