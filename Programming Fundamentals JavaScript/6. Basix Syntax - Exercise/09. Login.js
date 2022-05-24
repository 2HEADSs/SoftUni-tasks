function login(input) {
  let username = input[0];
  let pass = username.split("").reverse().join("");
  let wrong = 0;

  for (let i = 1; i < input.length; i++) {
    let current = input[i];
    if (current.split("").reverse().join("") == username) {
      console.log(`User ${username} logged in.`);
    } else {
      wrong++;
      if (wrong == 4) {
        console.log(`User ${username} blocked!`);
      } else {
        console.log("Incorrect password. Try again.");
      }
    }
  }
}
login(["Acer", "login", "go", "let me in", "recA"]);
login(["momo", "omom"]);
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
