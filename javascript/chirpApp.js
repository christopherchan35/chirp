// Angular app to control all the functionality of the app's front end
// chirpApp.js
var app = angular.module('chirpApp', []);

// One way data-binding is good for displaying, while two way data-binding
// is good for user input
app.controller('mainController', function($scope){
  $scope.posts = [];
  $scope.newPost = {created_by: '', text: '', created_at: ''};

  $scope.post = function(){
    $scope.newPost.created_at = Date.now();
    $scope.posts.push($scope.newPost);
    $scope.newpost = {created_by: '', text: '', created_at: ''};
  };
});

app.controller('authController', function($scope){
  $scope.user = {username: '', password: ''};
  $scope.error_message = '';

  // postService.getAll().success(function(data){
  //   $scope.posts = data;
  // });

  $scope.login = function(){
    // needs auth implementation
    $scope.error_message = 'login request for ' + $scope.user.username;
  };

  $scope.register = function(){
    // needs auth implementation
    $scope.error_message = 'registration request for ' + $scope.user.username;
  };
});
