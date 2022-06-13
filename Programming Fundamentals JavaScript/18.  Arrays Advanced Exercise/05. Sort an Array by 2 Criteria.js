function sortingByTwoCriteria(arr) {
  let sortedArr = arr.sort((a, b) => {
    return a.length - b.length || a.localeCompare(b);
  });
console.log(sortedArr.join('\n'));
}
sortingByTwoCriteria(["alpha", "beta", "gamma"]);
sortingByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
