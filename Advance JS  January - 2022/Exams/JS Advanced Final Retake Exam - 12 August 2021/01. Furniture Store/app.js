window.addEventListener('load', solve);

function solve() {
    let addBtn = document.getElementById('add');
    addBtn.addEventListener('click', add);
    let furnitureList = document.getElementById('furniture-list');

    let sumForPrice = 0
    let totalPriceElement = document.querySelector('.total-price');
    totalPriceElement.textContent = `${sumForPrice.toFixed(2)}`

    function add(e) {
        e.preventDefault()
        let model = document.getElementById('model');

        let year = document.getElementById('year');

        let description = document.getElementById('description');

        let price = document.getElementById('price');

        if (model.value != "" && year.value > 0 && description.value != "" && price.value > 0) {
            let trInfo = document.createElement('tr');
            trInfo.setAttribute('class', 'info')
            let modelTd = document.createElement('td');
            modelTd.textContent = model.value;
            let priceTd = document.createElement('td');
            priceTd.textContent = Number(price.value).toFixed(2);
            let tdForBtn = document.createElement('td');
            let moreBtn = document.createElement('button');
            moreBtn.setAttribute('class', 'moreBtn');
            moreBtn.textContent = 'More Info'


            let buyBtn = document.createElement('button');
            buyBtn.setAttribute('class', 'buyBtn');
            buyBtn.textContent = 'Buy it';



            let trHide = document.createElement('tr');
            trHide.setAttribute('class', 'hide')
            let tdYear = document.createElement('td');
            tdYear.textContent = `Year: ${year.value}`
            let tdDescription = document.createElement('td');
            tdDescription.setAttribute('coolspan', 3);
            tdDescription.textContent = `Description: ${description.value}`


            trHide.appendChild(tdYear)
            trHide.appendChild(tdDescription)
            tdForBtn.appendChild(moreBtn);
            tdForBtn.appendChild(buyBtn)

            trInfo.appendChild(modelTd)
            trInfo.appendChild(priceTd)
            trInfo.appendChild(tdForBtn)
            furnitureList.appendChild(trInfo)
            furnitureList.appendChild(trHide)

            model.value = "";
            year.value = "";
            description.value = "";
            price.value = ""
            buyBtn.addEventListener('click', buy);
            moreBtn.addEventListener('click', more)
        }
    }
    function more(e) {
        let btn = e.target;

        let hideElement = e.target.parentElement.parentElement.parentElement.children[1];

        if (btn.textContent == "More Info") {
            hideElement.style.display = 'contents'
            btn.textContent = 'Less Info'
        } else {
            hideElement.style.display = 'none'
            btn.textContent = 'More Info'
        }

    }

    function buy(e) {
        console.log(e.target);
        let tdPrice = e.target.parentElement.parentElement.children[1];
        tdPrice = tdPrice.textContent
        tdPrice = Number(tdPrice)
        sumForPrice += tdPrice;

        totalPriceElement.textContent = `${sumForPrice.toFixed(2)}`
        furnitureList.innerHTML = ""
    }
}
