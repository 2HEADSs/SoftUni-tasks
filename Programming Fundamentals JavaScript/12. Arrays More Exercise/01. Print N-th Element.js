function printNthElement(array){
    let step = Number(array.pop());
    let arrLength = array.length;
    let newArr = ''

    for(let i = 0; i < arrLength; i += step){
        let element = array[i];
        newArr += `${element} `
    }
    console.log(newArr);
}
printNthElement(['5', '20', '31', '4', '20', '2']);
printNthElement(['dsa', 'asd', 'test', 'test', '2']);
printNthElement(['1', '2', '3', '4', '5', '6']);