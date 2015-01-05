//module
var app = angular.module('soulAsylum', ['ngRoute']).value('$anchorScroll', angular.noop);

//routes
app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl : 'pages/about.html',
      controller : 'mainController'
    })
    .when('/artists', {
      templateUrl : 'pages/artists.html',
      controller : 'artistsController'
    })
    .when('/releases', {
      templateUrl : 'pages/releases.html',
      controller : 'releasesController'
    })
    .when('/videos', {
      templateUrl : 'pages/videos.html',
      controller : 'videosController'
    })
    .when('/events', {
      templateUrl : 'pages/events.html',
      controller : 'eventsController'
    })
    .when('/contact', {
      templateUrl : 'pages/contact.html',
      controller : 'contactController'
    });
});

//controllers
app.controller('mainController', function($scope){
  
});

app.controller('artistsController', function($scope){
  
});

app.controller('contactController', function($scope){
  
});

app.controller('releasesController', function($scope, $http){
  $http.get('releases.json')
       .then(function(res){
          $scope.releases = res.data;
        });  
});

app.controller('videosController', function($scope){
  
});
