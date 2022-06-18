function playList(array) {
  class Song {
    constructor(playList, name, time) {
      this.playList = playList;
      (this.name = name),
        (this.time = time),
        (this.print = () => console.log(this.name));
    }
  }
  let numberOfSong = array.shift();
  let desiredPlayList = array.pop();
  let songs = [];

  for (let i = 0; i < numberOfSong; i++) {
    let currentInput = array[i];
    let currentArray = currentInput.split("_");
    let currentSong = new Song(
      currentArray[0],
      currentArray[1],
      currentArray[2]
    );
    songs.push(currentSong);
  }
  if (desiredPlayList === 'all') {
    songs.forEach((s) => s.print());
  } else {
    let filtredSongs = songs.filter((s) => s.playList === desiredPlayList);
    filtredSongs.forEach((s) => s.print());
  }
}
// playList([
//   3,
//   "favourite_DownTown_3:14",
//   "favourite_Kiss_4:16",
//   "favourite_Smooth Criminal_4:01",
//   "favourite",
// ]);
// playList([
//   4,
//   "favourite_DownTown_3:14",
//   "listenLater_Andalouse_3:24",
//   "favourite_In To The Night_3:58",
//   "favourite_Live It Up_3:48",
//   "listenLater",
// ]);
playList([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    )
