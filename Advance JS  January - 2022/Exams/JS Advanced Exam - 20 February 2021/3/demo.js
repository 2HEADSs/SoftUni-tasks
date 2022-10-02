function sumArrays(array1, array2) {

    const longerArr = array1.length > array2.length ? array1 : array2;
    const rounds = array1.length < array2.length ? array1.length : array2.length;
    ///logerArr = array1 - 5;
    //rounds = array2 - 4
    const resultArr = [];

    for (let i = 0; i < rounds; i++) {
        resultArr.push(array1[i] + array2[i]);
    }

    resultArr.push(...longerArr.slice(rounds));

    console.log(resultArr);
}
sumArrays([1,2,3,4,5],[2,4,8,10])