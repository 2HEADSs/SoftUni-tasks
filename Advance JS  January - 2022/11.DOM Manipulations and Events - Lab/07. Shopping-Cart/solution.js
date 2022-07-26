function solve() {
  document
    .getElementsByClassName('shopping-cart')[0]
    .addEventListener('click', onClick);
  document
    .getElementsByClassName('checkout')[0]
    .addEventListener('click', checkout);

  let cart = [];
  let output = document.getElementsByTagName('textarea')[0];
  output.value = '';

  function onClick(e) {
    if (
      e.target.tagName == 'BUTTON' &&
      e.target.classList.contains('add-product')
    ) {
      let product = e.target.parentNode.parentNode;
      let productName = product.querySelector('.product-title').textContent;
      let productPrice = Number(
        product.querySelector('.product-line-price').textContent
      );
      cart.push({
        productName,
        productPrice,
      });

      output.value += `Added ${productName} for ${productPrice.toFixed(
        2
      )} to the cart.\n`;
    }
  }

  function checkout() {
    let products = new Set();
    cart.forEach((p) => products.add(p.productName));

    let total = cart.reduce((t, c) => t + c.productPrice, 0);

    output.value += `You bought ${[...products.keys()].join(
      ', '
    )} for ${total.toFixed(2)}.\n`;
  }
}
