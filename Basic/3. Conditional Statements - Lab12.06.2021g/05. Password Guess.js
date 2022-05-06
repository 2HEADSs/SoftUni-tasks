function solve(input) {
    let pass = input[0];
    if (pass === "s3cr3t!P@ssw0rd"){
        console.log("Welcome");
    }else{
        console.log("Wrong password!");
    }
}
solve(["qwerty"]);
solve(["s3cr3t!P@ssw0rd"]);
solve(["s3cr3t!p@ss"]);
