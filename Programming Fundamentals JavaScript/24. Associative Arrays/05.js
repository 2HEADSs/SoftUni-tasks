function solve(input) {
  let noteBook = {};
  let sortedBook = {};
  for (let line of input) {
    line = line.split(" ");
    let name = line.shift();
    let grades = line.map(Number);
    if (!noteBook.hasOwnProperty(name)) {
      noteBook[name] = grades;
    } else {
      noteBook[name].push(...grades);
    }
  }
  for (let keys in noteBook) {
    let name = keys;
    let grades = noteBook[keys];
    let sum = 0;
    let average = 0;
    for (let num of grades) {
      sum += Number(num);
      average = sum / grades.length;
    }
    sortedBook[name] = average;
  }
  let entriesOfSorted = Object.entries(sortedBook);
  let sort = entriesOfSorted.sort((a, b) => a[1] - b[1]);
  for (let el of sort) {
    let searchingName = el[0];
    if (noteBook.hasOwnProperty(searchingName)) {
      console.log(`${searchingName}: ${noteBook[searchingName].join(", ")}`);
    }
  }
}
solve(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
// solve(["Steven 3 5 6 4", "George 4 6", "Tammy 2 5 3", "Steven 6 3"]);
