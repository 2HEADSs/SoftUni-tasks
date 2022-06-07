function arrayRotation(arr, num){
for(let i = 0; i < num; i ++){
    let current = arr.shift();
    arr.push(current)
}
console.log(arr.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2)