function reverseArr(arr){
    let revArr = []
    for(let i = arr.length -1 ; i >= 0; i --){
        revArr.push(arr[i])
    }
    console.log(revArr.join(' '));
}
reverseArr(['a', 'b', 'c', 'd', 'e']);
reverseArr(['abc', 'def', 'hig', 'klm', 'nop']);
reverseArr(['33', '123', '0', 'dd']);
