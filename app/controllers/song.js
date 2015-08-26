app.controller("SongCtrl", function($scope, $q) {
  $scope.songs = [];
  $scope.secondSongs = [];
  $scope.theSong = "";

  function getFirstSongs() {
    return $q(function(resolve, reject) {
      $.ajax({
        url: "./data/first.json"
      })
      .done(function(response) {
        resolve(response.songs);
      })
      .fail(function(xhr, status, error) {
        reject(error);
      });
    });
  }

  getFirstSongs()
    .then(function(data) {
      $scope.songs = data;
    },function(error) {
      console.log("error is: ", error);
    });
  
  function getSecondSongs() {
    return $q(function(resolve, reject) {
      $.ajax({
        url: "./data/second.json"
      })
      .done(function(response) {
        resolve(response.songs);
      })
      .fail(function(xhr, status, error) {
        reject(error);
      });
    });
  }

  getSecondSongs()
    .then(function(data) {
      $scope.secondSongs = data;
      $.merge($scope.songs, $scope.secondSongs);
    },function(error) {
      console.log("error is: ", error);
    });

  $scope.killSong = function(song) {
    var songIndex = $scope.songs.indexOf(song);
    if (songIndex >= 0) {
      $scope.songs.splice(songIndex, 1);
    }
  };

});