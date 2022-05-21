function solve(input) {
    let capacity = Number(input[0]);
    let i = 1;
    let income = input[i];
    let counter = 0;
 
    while (income !== "End") {
        let luggage = Number(income); 
        if (capacity <= luggage) {
            console.log("No more space!");
            break;
        }       
        if (i % 3 === 0) {
            capacity -= luggage *= 1.10;
            counter++
        } else {
            capacity -= luggage;
            counter++
        } 
        i++;
        income = input[i];
    }
    if (income === "End") {
        console.log("Congratulations! All suitcases are loaded!");
        console.log(`Statistic: ${counter} suitcases loaded.`);
    } else {
        console.log(`Statistic: ${counter} suitcases loaded.`);
    }
}
solve(["550", "100", "252", "72", "End"]);
solve(["700.5", "180", "340.6", "126", "220"]);