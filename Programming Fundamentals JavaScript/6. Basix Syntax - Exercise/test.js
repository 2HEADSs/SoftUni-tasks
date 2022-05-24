function login(input) {
  let username = input[0];
  let password = username.split("").reverse().join("");
  console.log(password);
}
login(["Acer", "login", "go", "let me in", "recA"]);

function zero(a) {
  if (a % 2 == 0) {
    console.log(`yes`);
  }
}
zero(0);
