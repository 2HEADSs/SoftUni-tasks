function attachGradientEvents() {
  let element = document.getElementById('gradient');
  element.addEventListener('mousemove', onMove);

  let result = document.getElementById('result');
  function onMove(e) {
    let box = e.target;
    let offset = Math.trunc((e.offsetX / box.clientWidth) * 100);
    result.textContent = `${offset}%`;
  }
}
