function timeToWalk(a, b, c) {
  let steps = Number(a);
  let footPrint = Number(b);
  let speed = (Number(c) * 1000) / 3600;

  let distance = steps * footPrint;
  let rest = Math.floor(distance / 500) * 60;
  let time = distance / speed + rest;

  let hours = Math.floor(time / 3600)
    .toFixed(0)
    .padStart(2, '0');
  let minutes = Math.floor(time / 60)
    .toFixed(0)
    .padStart(2, '0');
  let second = (time % 60).toFixed(0).padStart(2, '0');
  console.log(`${hours}:${minutes}:${second}`);
}
timeToWalk(4000, 0.6, 5);
timeToWalk(2564, 0.7, 5.5);
