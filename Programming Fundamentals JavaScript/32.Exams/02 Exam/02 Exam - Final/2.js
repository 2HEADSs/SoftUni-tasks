function solve(input) {
    let pattern = /(=|\/)([A-Z][A-Za-z]{2,})\1/g;
    let output = [];
    let points = 0;
    let match = pattern.exec(input);
    while (match !== null) {
        output.push(match[2]);
        points += match[2].length;
        match = pattern.exec(input)
    }

    console.log(`Destinations: ${output.join(", ")}`);
    console.log(`Travel Points: ${points}`);
}
solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")
solve("ThisIs some InvalidInput")