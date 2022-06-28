function solve(input) {
    let message = input.shift();

    while (input[0] !== "Reveal") {
        let [command, first, second] = input.shift().split(":|:");

        if (command === "InsertSpace") {
            let index = Number(first);
            let left = message.substring(0, index);
            let right = message.substring(index);
            message = left + " " + right;
            console.log(message);
        } else if (command === "Reverse") {
            let substring = first
            if (message.includes(substring)) {
                let index = message.indexOf(substring);
                let left = message.substring(0,index);
                let right = message.substring(index + substring.length);
                substring = substring.split("").reverse().join("");
                message = left + right + substring;
                console.log(message);
            } else {
                console.log(`error`);
            }
        } else if (command === "ChangeAll") {
            message = message.split(first).join(second);
            console.log(message);
        }
    }
    console.log(`You have a new text message: ${message}`);
}
solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal']);
solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal']);