function solve(startObj, data) {


    for (let line of data) {
        let [command, site] = line.split(" ");

        if (command == "Open") {
            let index = startObj["Open Tabs"].indexOf(site)

            if (index === -1) {
                startObj["Open Tabs"].push(site);
                startObj["Browser Logs"].push(line);
            }
        } else if (command === "Close") {
            let index = startObj["Open Tabs"].indexOf(site)

            if (index !== -1) {
                startObj["Open Tabs"].splice(index, 1)
                startObj["Browser Logs"].push(line);
                startObj["Recently Closed"].push(site);
            }
        }  else if(line === "Clear History and Cache"){
            startObj["Open Tabs"].length = 0;
            startObj["Recently Closed"].length = 0;
            startObj["Browser Logs"].length = 0;
        }
    }
    console.log(`${startObj["Browser Name"]}`);
    console.log(`Open Tabs: ${startObj["Open Tabs"].join(", ")}`);
    console.log(`Recently Closed: ${startObj["Recently Closed"].join(", ")}`);
    console.log(`Browser Logs: ${startObj["Browser Logs"].join(", ")}`);
}
solve({"Browser Name":"Mozilla Firefox",
"Open Tabs":["YouTube"],
"Recently Closed":["Gmail", "Dropbox"],
"Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
["Open Wikipedia", "Clear History and Cache", "Open Twitter"]

)