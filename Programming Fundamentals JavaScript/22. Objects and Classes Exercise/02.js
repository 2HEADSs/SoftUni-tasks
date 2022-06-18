function town(arr) {
  for (let input of arr) {
    let data = input.split(" | ");
    let townData = {
      town: data[0],
      latitude: Number(data[1]).toFixed(2),
      longitude: Number(data[2]).toFixed(2),
    };
    console.log(townData);
  }
}
town(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
// { town: 'Sofia', latitude: '42.70', longitude: '23.33' }
