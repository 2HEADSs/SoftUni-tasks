function solve(input) {
  let n = Number(input.shift());
  let obj = [];
  for (let i = 0; i < n; i++) {
    let [piece, compositor, key] = input.shift().split("|");
    obj[piece] = {
      compositor: compositor,
      key: key,
    };
  }
  for (let line of input) {
    if (line === "Stop") {
      break;
    }
    let [command, piece, first, second] = line.split("|");
    if (command === "Add") {
      if (obj.hasOwnProperty(piece)) {
        console.log(`${piece} is already in the collection!`);
      } else {
        obj[piece] = {
          compositor: first,
          key: second,
        };
        console.log(
          `${piece} by ${first} in ${second} added to the collection!`
        );
      }
    } else if (command === "Remove") {
      if (obj.hasOwnProperty(piece)) {
        delete obj[piece];
        console.log(`Successfully removed ${piece}!`);
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    } else if (command === "ChangeKey") {
      if (obj.hasOwnProperty(piece)) {
        obj[piece].key = first;
        console.log(`Changed the key of ${piece} to ${first}!`);
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    }
  }
  let key = Object.keys(obj);
  let sorted = key.sort((a, b) => {
    let nameA = a;
    let nameB = b;

    let compositorA = obj[a].compositor;
    let compositorB = obj[b].compositor;

    return nameA.localeCompare(nameB) || compositorA.localeCompare(compositorB);
  });
  for (let el of sorted) {
    console.log(
      `${el} -> Composer: ${obj[el].compositor}, Key: ${obj[el].key}`
    );
  }
}
solve([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
// solve([
//   "4",
//   "Eine kleine Nachtmusik|Mozart|G Major",
//   "La Campanella|Liszt|G# Minor",
//   "The Marriage of Figaro|Mozart|G Major",
//   "Hungarian Dance No.5|Brahms|G Minor",
//   "Add|Spring|Vivaldi|E Major",
//   "Remove|The Marriage of Figaro",
//   "Remove|Turkish March",
//   "ChangeKey|Spring|C Major",
//   "Add|Nocturne|Chopin|C# Minor",
//   "Stop",
// ]);
