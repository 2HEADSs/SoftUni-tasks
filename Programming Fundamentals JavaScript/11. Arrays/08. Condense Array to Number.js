function condenseArrr(arr) {
    while(arr.length > 1){
        let condensed = []
        for(let i = 0; i < arr.length -1 ; i++){
            let sum =  arr[i] + arr[i + 1]; ;
            condensed.push(sum)
        }
        arr = condensed
    }
    console.log(arr[0]);
  }
condenseArrr([2, 10, 3]);
