function town(arr) {
  for (let table of arr) {
    let [town, latitude, longitude] = table.split(" | ");

    let currentTownOnfo = {
      town: town,
      latitude: Number(latitude).toFixed(2),
      longitude: Number(longitude).toFixed(2),
    };
    console.log(currentTownOnfo);
  }
}
town(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
