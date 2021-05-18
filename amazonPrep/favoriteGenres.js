/*
https://leetcode.com/discuss/interview-question/373006/Amazon-or-OA-2019-or-Favorite-Genres

Given a map Map<String, List<String>> userSongs with user names as keys and a list of all the songs that the user has listened to as values.

Also given a map Map<String, List<String>> songGenres, with song genre as keys and a list of all the songs within that genre as values. The song can only belong to only one genre.

The task is to return a map Map<String, List<String>>, where the key is a user name and the value is a list of the user's favorite genre(s). Favorite genre is the most listened to genre. A user can have more than one favorite genre if he/she has listened to the same number of songs per each of the genres.

Example 1:
Input:
userSongs = {
   "David": ["song1", "song2", "song3", "song4", "song8"],
   "Emma":  ["song5", "song6", "song7"]
},
songGenres = {
   "Rock":    ["song1", "song3"],
   "Dubstep": ["song7"],
   "Techno":  ["song2", "song4"],
   "Pop":     ["song5", "song6"],
   "Jazz":    ["song8", "song9"]
}

Output: {
   "David": ["Rock", "Techno"],
   "Emma":  ["Pop"]
}

Explanation:
David has 2 Rock, 2 Techno and 1 Jazz song. So he has 2 favorite genres.
Emma has 2 Pop and 1 Dubstep song. Pop is Emma's favorite genre.

Example 2:
Input:
userSongs = {
   "David": ["song1", "song2"],
   "Emma":  ["song3", "song4"]
},
songGenres = {}

Output: {
   "David": [],
   "Emma":  []
}
*/

/*
iterate over usersSongs,
create a new user with map, create new map with each new user
map: {
   "David": {
     "Rock": 2,
     "Techno": 2,
     "Jazz": 1,
    },
   "Emma": {
     "Pop": 2,
     "Dubstep": 1,
   }
}

reduce each user map to favorite

OR just find fav count and reduce before setting

*/

var findUsersFavoriteGenre = function(userSongs, songGenres) {
  const userFavoriteGenres = new Map();
  const songToGenre = new Map();
  for (let [genre, songsInGenre] of songGenres) {
    for (let song of songsInGenre) {
      songToGenre.set(song, genre);
    }
  }
  console.log(songToGenre);

  for (let [user, songs] of userSongs) {
    let favorites = [];
    const count = new Map();
    for (let songNum of songs) {
      const genreOfThisSong = songToGenre.get(songNum);
      if (count.has(genreOfThisSong)) {
        count.set(genreOfThisSong, count.get(genreOfThisSong) + 1);
      } else {
        count.set(genreOfThisSong, 1);
      }
    }
    const isTop = Array.from(count.keys().sort((a, b) => count.get(b) >= count.get(a)));
    if (!userSongToGenreCounts.has(user)) {
      userSongToGenreCounts.set(user, isTop);
    }
  }
  return userFavoriteGenres;
};