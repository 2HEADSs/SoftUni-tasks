function passwordGuess(input) {
    let password = (input[0]);
    let isCorrect = true;
    let notCorrect = false;

    if (password != notCorrect) {
        console.log("Wrong password!")
    }
    if (password ==isCorrect) {
        console.log("Welcome")
    }
}
passwordGuess(["qwerty"]);
passwordGuess(["s3cr3t!P@ssw0rd"]);
passwordGuess(["s3cr3t!p@ss"]);