function pyramid(base, increment) {
    let stoneTotal = 0;
    let marbleTotal = 0;
    let lapisTotal = 0;
    //let goldTotal = 0;
    let cycle = 1;
 
    for (i = base; i > 0; i -= 2) {
        let floor = i * i;
        let stone = (Math.pow((i - 2), 2));
        let marble = 0;
        let lapis = 0;
        var gold = 0;            
        if (cycle % 5 == 0) {
            marble = 0;
            lapis = (floor - stone);            
        } else {
            lapis = 0;
            marble = (floor - stone);
        }        
        if (i <= 2) {
            gold = floor;
            stone = 0;
            marble = 0;
            break;
        }
        stoneTotal += stone;
        marbleTotal += marble;
        lapisTotal += lapis;  
        cycle++;     
    }
 
    console.log("Stone required:", Math.ceil(stoneTotal * increment));
    console.log("Marble required:", Math.ceil(marbleTotal * increment));
    console.log("Lapis Lazuli required:", Math.ceil(lapisTotal * increment));
    console.log("Gold required:", Math.ceil(gold * increment));
    console.log("Final pyramid height:", Math.floor(cycle * increment));
}