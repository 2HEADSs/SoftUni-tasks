function solve() {
  /* # configure event listeners # */
  //select all buttons
  //first button -> table generation
  //second button -> byuy furniture

  let table = document.querySelector('table.table tbody');

  let [input, output] = Array.from(document.querySelectorAll('textarea'));

  let [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  /* # table generation #*/
  function generate(e) {
    //read input JSON and parse it
    //for avery array element, create table row
    let data = JSON.parse(input.value);

    for (let item of data) {
      let row = document.createElement('tr');

      let ImgTd = document.createElement('td');
      let nameTd = document.createElement('td');
      let priceTd = document.createElement('td');
      let decFactorTd = document.createElement('td');
      let checkTd = document.createElement('td');

      let img = document.createElement('img');
      img.src = item.img;
      ImgTd.appendChild(img);

      let nameP = document.createElement('p');
      nameP.textContent = item.name;
      nameTd.appendChild(nameP);

      let priceP = document.createElement('p');
      priceP.textContent = item.price;
      priceTd.appendChild(priceP);

      let decP = document.createElement('p');
      decP.textContent = item.decFactor;
      decFactorTd.appendChild(decP);

      let check = document.createElement('input');
      check.type = 'checkbox';
      checkTd.appendChild(check);

      row.appendChild(ImgTd);
      row.appendChild(nameTd);
      row.appendChild(priceTd);
      row.appendChild(decFactorTd);
      row.appendChild(checkTd);

      table.appendChild(row);
    }
  }

  /* # buy futniture #*/
  function buy(e) {
    //select all checkboxes
    //filter only checked checkboxes
    //--select parent row
    //--read item information
    //display output

    let furniture = Array.from(
      document.querySelectorAll('input[type= "checkbox"]:checked')
    )
      .map((b) => b.parentElement.parentElement)
      .map((r) => ({
        name: r.children[1].textContent,
        price: Number(r.children[2].textContent),
        decFactor: Number(r.children[3].textContent),
      }));
    let names = [];
    let total = 0;
    let decFactor = 0;

    for (let item of furniture) {
      names.push(item.name);
      total += item.price;
      decFactor += item.decFactor;
    }
    let result = `Bought furniture: ${names.join(', ')}
Total price: ${total.toFixed(2)}
Average decoration factor: ${decFactor / furniture.length}`;

    output.value = result;
  }
}

//Bought furniture: {furniture1}, {furniture2}…".
//Total price: {totalPrice}
//Average decoration factor: {decFactor}
