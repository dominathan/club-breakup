var angular = require('angular');
var angularRoute = require('angular-route');
require('./home.controller');

angular.module('home',[
  'ngRoute',
])
.config(function($routeProvider) {
  $routeProvider
      .when('/', {
        template: require('./views/home-view.html'),
        controller: 'HomeController'
      })
  });