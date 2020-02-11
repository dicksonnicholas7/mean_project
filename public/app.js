var myApp = angular.module("BlogApp", []);
myApp.controller('BlogController', ['$scope', '$http', function($scope, $http){
$scope.createPost = createPost;
function createPost(post){
    console.log(post);
    $http.post("/api/blogpost", post);
}
}]);

