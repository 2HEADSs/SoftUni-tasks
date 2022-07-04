function solve(input) {
    let text = input.shift();

    while (input[0] !== "End") {
        let [command, first, second] = input.shift().split(" ");
        if (command === "Translate") {
            text = text.split(first).join(second);
            console.log(text);
        } else if (command === "Includes") {
            if (text.includes(first)) {
                console.log("True");
            } else {
                console.log("False");
            }
        } else if (command === "Start") {
            if (text.indexOf(first) === 0) {
                console.log("True");
            } else {
                console.log("False");
            }
        } else if (command === "Lowercase") {
            text = text.toLowerCase();
            console.log(text);
        } else if (command === "FindIndex") {
            let index = -1;
            for (let i = text.length - 1; i >= 0; i--) {
                if (text[i] === first) {
                    index = i
                    break;
                }
            }
            console.log(index);
        } else if (command === "Remove") {
            let startIndex = Number(first);
            let count = Number(second)
            let leftPart = text.substring(0, startIndex);
            let deleted = text.substring(startIndex, count + 1);
            let restText = text.substring(startIndex + count);
            text = leftPart + restText;
            console.log(text);

        }
    }
}
solve(["//Thi5 I5 MY 5trING!//",
    "Translate 5 s",
    "Includes string",
    "Start //This",
    "Lowercase",
    "FindIndex i",
    "Remove 0 10",
    "End"]);
solve(["*S0ftUni is the B3St Plac3**",
    "Translate 2 o",
    "Includes best",
    "Start the",
    "Lowercase",
    "FindIndex P",
    "Remove 2 7",
    "End"]);
