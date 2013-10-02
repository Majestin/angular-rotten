'use strict';

// angular.module('devStudyAngularMissionApp', ['ngRoute'])
//   .config(function ($routeProvider) {
//     $routeProvider
//       .when('/movies', {
//         templateUrl: 'list.html',
//         controller: 'MoviesListsController'
//       })
      // .when('/movies/:id', {
      //   templateUrl: 'views/partials/movie_detail.html',
      //   controller: 'MoiveDetailController'
      // })
//       .otherwise({
//         redirectTo: '/moives'
//       });
//   });

angular.module('devStudyAngularMissionApp', [])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/movies', {
    templateUrl: 'views/partials/movies_lists.html', 
    controller: 'MoviesListsController'
  })
  .when('/movies/:id', {
    templateUrl: 'views/partials/movie_detail.html',
    controller: 'MoiveDetailController'
  })
  .when('/ ', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })  
  .otherwise({
    redirectTo: '/movies'
  });
}]);