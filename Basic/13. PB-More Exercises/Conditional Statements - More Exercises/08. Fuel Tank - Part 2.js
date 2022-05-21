function solve(input) {
    let type = input[0];
    let liters = Number(input[1]);
    let card = input[2];
    let sum = 0
    if(type === "Gasoline"){
        if(card === "Yes"){
            sum = liters * (2.22 - 0.18);
        }else{
            sum = liters * 2.22
        }
        if( liters >=20 && liters <= 25){
            sum *= 0.92 
        }else if( liters > 25){
            sum *= 0.90
        }
    }else if(type === "Diesel"){
        if(card === "Yes"){
            sum = liters * (2.33 - 0.12);
        }else{
            sum = liters * 2.33
        }
        if( liters >=20 && liters <= 25){
            sum *= 0.92 
        }else if( liters > 25){
            sum *= 0.90
        }        
    }else{
        if(card === "Yes"){
            sum = liters * (0.93 - 0.08);
        }else{
            sum = liters * 0.93
        }
        if( liters >=20 && liters <= 25){
            sum *= 0.92 
        }else if( liters > 25){
            sum *= 0.90
        }                
    }
    console.log(`${sum.toFixed(2)} lv.`);
}
solve(["Gas", "30", "Yes"]);
solve(["Gasoline", "25", "No"]);
solve(["Diesel", "19", "No"]);
