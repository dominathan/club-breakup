(function() {
  'use strict';
  angular
  .module('users')
  .controller('ProfileController',function($scope, $auth,UserService) {



    UserService.getProfile()
    .success(function(data) {
      $scope.user = data;
      $scope.myAccount = data.data;
      // console.log(data);
    })
    .error(function(error) {
      console.log(eror)
    });

  $scope.tinderizer = function(fb) {
    UserService.tinderizer(fb)
    .then(function(data) {
      // console.log(data);
      $scope.myAccount = data.data
    });
  }

  $scope.updateProfile = function(user) {
    UserService.updateProfile({
      username: user.username,
      email: user.email
    }).then(function() {
      // $alert({
      //   content: 'Profile has been updated',
      //   animation: 'fadeZoomFadeDown',
      //   type: 'material',
      //   duration: 3
      // });
    });
  };

  UserService.getTinderInfo()
  .then(function(data) {
    console.log(data);
    $scope.myAccount = data.data;
  });



})

}());
