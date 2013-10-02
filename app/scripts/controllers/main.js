'use strict';

angular.module('devStudyAngularMissionApp')
.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
    {'key' : 'HTML5 Boilerplate'},
    {'key' : 'AngularJS'},
    {'key' : 'Karma'}
    ];
    console.log($scope.awesomeThings);
});

angular.module('devStudyAngularMissionApp').
factory('RottenAPI', function () {
    var API_KEY = 'vzjnwecqq7av3mauck2238uj';
    // var base = 
    var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/';
    var params = {
        apikey: API_KEY,
        callback: 'JSON_CALLBACK'
    };

    var addParams = function(p) {
        p = angular.extend(p, params);
        var res = [];
        angular.forEach(p, function(v, k){
            res.push(k+'='+v);
        });
        return res;
    };

    return {
        listMovies: function(type, extra) {
            extra = angular.extend({limit:10, country: 'us'}, extra || {});
            console.log(extra);
            return url + 'movies/' + type + '.json?' + addParams(extra).join('&');
        },
        listUpcoming: function(type, extra) {
            extra = angular.extend({limit:10, country: 'us'}, extra || {});
            console.log(extra);
            return url + 'movies/' + type + '.json?' + addParams(extra).join('&');
        }        
    };
    // return $resource('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?country=es', {}, {
    //     query: {method:'GET', params:{apikey: "vzjnwecqq7av3mauck2238uj",callback:'JSON_CALLBACK'}, isArray:true}
    // });

});

angular.module('devStudyAngularMissionApp').controller('MoviesListsController', function ($scope, $http, RottenAPI) {
    $http.jsonp(RottenAPI.listMovies('in_theaters', {limit: 30}))
    .success(function(data) {   

        console.log(data.movies);
        $scope.movies = data.movies;

    });

    $http.jsonp(RottenAPI.listMovies('upcoming', {limit: 30}))
    .success(function(data) {   

        console.log(data.movies);
        $scope.upcomings = data.movies;

    });
});
