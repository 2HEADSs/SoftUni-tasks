function solve(input) {
    let travelList = input.shift();

    while (input[0] !== "Travel") {
        let [command, first, second] = input.shift().split(":");
        if (command === "Add Stop") {
            let index = Number(first);
            let string = second;
            if (index >= 0 && index < travelList.length) {
                let left = travelList.substring(0, index);
                let right = travelList.substring(index)
                travelList = left + string + right;
            }
        } else if (command === "Remove Stop") {
            let startIndex = Number(first);
            let endIndex = Number(second);
            if ((startIndex >= 0 && startIndex < travelList.length) && (endIndex >= 0 && endIndex < travelList.length)) {
                let left = travelList.substring(0, startIndex);
                let right = travelList.substring(endIndex + 1);
                travelList = left + right;
            }
        } else if (command === "Switch") {
            travelList = travelList.split(first).join(second)
        }
        console.log(travelList);
    }
    console.log(`Ready for world tour! Planned stops: ${travelList}`);
}
solve(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);
