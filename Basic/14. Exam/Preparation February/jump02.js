function highjump(input){
 
    let height = input[0];
    let index = 1;
    let heightofstick = input[index++];
    let main = height - 30;
    let jumps = 1;
    let failed = 0;
    while (true) {
        if (heightofstick > main) {
            if (main >= height) {
                console.log(`Tihomir succeeded, he jumped over ${height}cm after ${jumps} jumps.`);
             break;
            }
            main += 5;
            failed = 0;
        } else {
            failed++;
            if (failed === 3) {
                console.log(`Tihomir failed at ${main}cm after ${jumps} jumps.`);
                break;
            }
        }
        heightofstick = input[index++];
        jumps++;
    }
}