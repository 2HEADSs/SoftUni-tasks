function solve(arr) {
  let result = arr.reduce((acc, el) => {
    let accL = acc.length;
    //  дължината на масива acc (акумулатора в reduce), взета в променлива;
    if (!accL) {
      // тук проверяваме чрез boolean дали accL има стойност, ако няма, връща false и не позволява достъпването на кода в проверката. връща falsy стойност; а знака "!" показва, че правим противоположното, тоест "ако няма", а без "!" тогава ще значи "ако има";
      acc.push(el);
    } else if (el >= acc[accL - 1]) {
      acc.push(el);
    }
    return acc;
  }, []);
  console.log(result);
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([1, 2, 3, 4]);
solve([20, 3, 2, 15, 6, 1]);
