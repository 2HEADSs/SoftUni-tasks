function town(arr) {
  for (let data of arr) {
    let [town, latitude, longitude] = data.split(" | ");

    let currentTownInfo = {
      town,
      latitude: (+latitude).toFixed(2),
      longitude: (+longitude).toFixed(2),
    };
    console.log(currentTownInfo);
  }
}
town(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
