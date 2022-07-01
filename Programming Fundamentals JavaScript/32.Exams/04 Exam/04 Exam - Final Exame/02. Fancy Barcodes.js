function solve(input) {
  let num = Number(input.shift());
  let pattern = /(@#+)(([A-Z][A-Za-z\d]{4,})[A-Z])\1/;

  for (let i = 0; i < num; i++) {
    let product = input[i];
    let match = pattern.exec(product);
    if (match) {
      let productGroup = "";
      let word = match[2];
      for (let el of word) {
        let isNumber = Number(el);
        if (isNumber * 1 === isNumber) {
          productGroup += el;
        }
      }
      if (productGroup === "") {
        productGroup = "00";
      }
      console.log(`Product group: ${productGroup}`);
    } else {
      console.log("Invalid barcode");
    }
  }
}
solve(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
solve([
  "6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#",
]);
