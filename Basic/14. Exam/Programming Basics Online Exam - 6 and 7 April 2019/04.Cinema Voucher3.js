function solve(input) {
    let voucher = Number(input.shift()) ;
    let tickets = 0 ;
    let consumables = 0 ;
    let price = 0 ;
    while (input[0] != "End") {
        let current = input.shift() ;
        if (current.length > 8 ) {
            price = current.charCodeAt(0) + current.charCodeAt(1) ;
            if (voucher >= price) {
                voucher -= price ;
                tickets ++ ;
            }else{
                break ;
            }
        }else{
            price = current.charCodeAt(0) ;
            if (voucher >= price) {
                voucher -= price ;
                consumables ++ ;
            }else{
                break ;
            }
        }
        
    }
    console.log(tickets)
    console.log(consumables)
}
solve(["300", "Captain Marvel", "popcorn", "Pepsi"]);
solve(["1500", "Avengers: Endgame", "Bohemian Rhapsody", "Deadpool 2", "End"]);