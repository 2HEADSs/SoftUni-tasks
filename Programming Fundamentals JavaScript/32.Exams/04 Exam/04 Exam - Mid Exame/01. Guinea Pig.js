function guineaPig(arr) {
  let food = Number(arr[0]) * 1000;
  let hay = Number(arr[1]) * 1000;
  let cover = Number(arr[2]) * 1000;
  let weight = Number(arr[3]) * 1000;
  let isOver = false;

  for (let i = 1; i <= 30; i++) {
    food -= 300;
    if (i % 2 == 0) {
      let needHay = food * 0.05;
      hay -= needHay;
    }
    if (i % 3 == 0) {
      let needCover = weight / 3;
      cover -= needCover;
    }
    if (food <= 0 || hay <= 0 || cover <= 0) {
      console.log(`Merry must go to the pet store!`);
      isOver = true;
      break;
    }
  }
  if (!isOver) {
    food /= 1000;
    hay /= 1000;
    cover /= 1000;
    console.log(
      `Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(
        2
      )}.`
    );
  }
}
guineaPig(["10", "5", "5.2", "1"]);
guineaPig(["1", "1.5", "3", "1.5"]);
guineaPig(["9", "5", "5.2", "1"]);
