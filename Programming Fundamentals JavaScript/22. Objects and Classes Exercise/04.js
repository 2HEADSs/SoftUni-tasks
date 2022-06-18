function solve(input) {
  let movies = [];

  for (const line of input) {
    if (line.includes("addMovie ")) {
      let name = line.split("addMovie ")[1];
      movies.push({ name });
    } else if (line.includes("directedBy")) {
      let [name, director] = line.split(" directedBy ");
      let movie = movies.find((m) => m.name === name);
      //m  е всеки един обект от масива който създаваме и чрез m.name достъпваме ключа name
      //ако съществува ще върне филма(true), ако не - undefined(false)
      // movie  ако е true ще държи актуалния Movie(обект) от масива
      //масива съдържа обект от филми
      if (movie) {
        movie.director = director;
        //създаваме ключ директор в дадения обект (не във всички обекти) със стойност director,
        //която взимаме от  let[name, director] = line.split(" directedBy ");
      }
    } else if (line.includes("onDate")) {
      let [name, date] = line.split(" onDate ");
      let movie = movies.find((m) => m.name === name);
      if (movie) {
        movie.date = date;
      }
    }
  }
  movies.forEach(movie => {
      if(movie.name && movie.date && movie.director){
          console.log(JSON.stringify(movie));
      }
  })
}
solve([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
