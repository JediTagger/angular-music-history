var app = angular.module("MusicApp", ['angular.filter', 'ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/songs', {
        templateUrl: 'partials/song-list.html',
        controller: 'SongCtrl'
      }).
      when('/add', {
        templateUrl: 'partials/add-song.html',
        controller: 'AddCtrl'
      }).
      otherwise({
        redirectTo: '/songs'
      });
  }]);