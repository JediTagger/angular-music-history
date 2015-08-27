app.controller("AddCtrl", function($scope) {
  $scope.newName = "";
  $scope.newArtist = "";
  $scope.newAlbum = "";

  $scope.addSong = function() {
    console.log($scope.songs);
    $scope.songs.push({name: $scope.newName,
                       artist: $scope.newArtist,
                       album: $scope.newAlbum });
    $scope.newName = "";
    $scope.newArtist = "";
    $scope.newAlbum = "";
  };
});