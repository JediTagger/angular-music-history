app.controller("SongCtrl", 
  ["$scope",
   "song-storage", 
  function($scope, song_storage) {

    $scope.songs = [];

    song_storage.then(
    function(data) {
      $scope.songs = data;
    },
    function(error) {
      console.log("error is: ", error);
    });

    $scope.killSong = function(song) {
      var songIndex = $scope.songs.indexOf(song);
      if (songIndex >= 0) {
        $scope.songs.splice(songIndex, 1);
      }
    };
  }
]);