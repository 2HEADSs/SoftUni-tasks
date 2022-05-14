function solve(input) {
    let index = 0;
    let name = input[0];
    index++;
    let tempPass = input[index];
    index++;
    let current = input[index];

    while(current !== tempPass){
        index++;
        current = input[index]
    }
    console.log(`Welcome ${name}!`);
}
solve(["Nakov", "1234", "Pass", "1324", "1234"]);
solve(["Gosho", "secret", "secret"]);
