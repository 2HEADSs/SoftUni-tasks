function playList(arr) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList,
        this.name = name,
        this.time = time,
        (this.print = () => console.log(this.name));
    }
  }
  let countSongs = arr.shift();
  let desiredPlayList = arr.pop();
  let songs = [];

  for (let i = 0; i < countSongs; i++) {
    let currentInput = arr[i].split("_");
    let currentSong = new Song(
      currentInput[0],
      currentInput[1],
      currentInput[2]
    );
    songs.push(currentSong);
  }
  if (desiredPlayList === "all") {
    songs.forEach((s) => s.print());
  } else {
    songs
    .filter((s) => s.typeList === desiredPlayList)
    .forEach((s) => s.print());
  }
}
playList([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
