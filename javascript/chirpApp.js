// Angular app to control all the functionality of the app's front end
// chirpApp.js
var app = angular.module('chirpApp', []);

// One way data-binding is good for displaying, while two way data-binding
// is good for user input
app.controller('mainController', function($scope){
  $scope.posts = [];
  $scope.newPost = {created_by: '', text: '', created_at: ''};

  $scope.post = function(){
    $scope.newPost.created_at = DateTime.now();
    $scope.posts.push($scope.newPost);
    $scope.newpost = {created_by: '', text: '', created_at: ''};
  };
});
