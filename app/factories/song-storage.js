app.factory("song-storage", function($q, $http) {

  function getSongList() {

    // Return a promise for async XHR
    return $q(function(resolve, reject) {

      // Perform asynchronous operation, resolve or reject 
      // the promise when appropriate.
      $http.get('./data/songs.json')
      .success(
        function(objectFromJSONFile) {
          resolve(objectFromJSONFile.songs);
        },function(error) {
          reject(error);
        }
      );

    });
  }

  return getSongList();
});