function encodeAndDecodeMessages() {
  let [encodeBtn, decodeBtn] = Array.from(document.querySelectorAll('button'));
  let [input, output] = Array.from(document.querySelectorAll('textarea'));

  encodeBtn.addEventListener('click', encode);
  decodeBtn.addEventListener('click', decode);
  let resultBeforeEncode = [];
  let resultBeforeDecode = [];

  function encode(e) {
    for (let el of input.value) {
      let char = el.charCodeAt() + 1;
      resultBeforeEncode.push(String.fromCharCode(char));
    }
    output.value = resultBeforeEncode.join('');
    input.value = '';
    resultBeforeEncode = [];
  }

  function decode(e) {
    for (let el of output.value) {
      let char = el.charCodeAt() - 1;
      resultBeforeDecode.push(String.fromCharCode(char));
    }
    output.value = resultBeforeDecode.join('');
    resultBeforeDecode = [];
  }
}
