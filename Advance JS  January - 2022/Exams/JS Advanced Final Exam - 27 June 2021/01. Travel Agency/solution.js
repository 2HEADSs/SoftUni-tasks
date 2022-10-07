window.addEventListener('load', solution);

function solution() {
  // let[name, email, phone, addres, posCode] = document.querySelectorAll('#form input')
  let formDiv = document.getElementById('form');
  let submitBtn = document.getElementById('submitBTN');
  submitBtn.addEventListener('click', submitFn);

  let mainDiv = document.getElementById('block')
  let editBtn = document.getElementById('editBTN');


  let continueBtn = document.getElementById('continueBTN');


  let ulPreview = document.getElementById('infoPreview')

  let nameField = document.getElementById('fname');
  let emailFiled = document.getElementById('email');
  let phoneFiled = document.getElementById('phone');
  let adressFiled = document.getElementById('address');
  let postCodeFiled = document.getElementById('code');

  function submitFn(e) {
    e.preventDefault();
    let data = [];
    data.push(nameField.value, emailFiled.value,phoneFiled.value,adressFiled.value,postCodeFiled.value);

    if (nameField.value && emailFiled.value){
      let liName = document.createElement('li');
      liName.textContent = `Full Name: ${nameField.value}`
      let liEmail = document.createElement('li');
      liEmail.textContent = `Email: ${emailFiled.value}`
      let liPhone = document.createElement('li');
      liPhone.textContent = `Phone Number: ${phoneFiled.value}`
      let liAdresss = document.createElement('li');
      liAdresss.textContent = `Addres: ${adressFiled.value}`
      let liPostCode = document.createElement('li');
      liPostCode.textContent = `Postal Code: ${postCodeFiled.value}`

      ulPreview.appendChild(liName);
      ulPreview.appendChild(liEmail);
      ulPreview.appendChild(liPhone);
      ulPreview.appendChild(liAdresss);
      ulPreview.appendChild(liPostCode);
      editBtn.disabled = false;
      continueBtn.disabled = false;
      submitBtn.disabled = true;

      data.nameField.value = nameField.value;
      data.la
      data.push(nameField.value, emailFiled.value, phoneFiled.value, adressFiled.value, postCodeFiled.value);
      
      nameField.value = ''
      emailFiled.value = ''
      phoneFiled.value = ''
      adressFiled.value = ''
      postCodeFiled.value = ''
      editBtn.addEventListener('click', editFn);
      continueBtn.addEventListener('click', continueFn)

      function editFn(e){
        nameField.value = data[0];
        emailFiled.value = data[1];
        phoneFiled.value = data[2];
        adressFiled.value = data[3];
        postCodeFiled.value = data[4];
        editBtn.disabled = true;
        continueBtn.disabled = true;
        submitBtn.disabled = false;
        // ulPreview.remove();
        // //removeParent
        liName.remove();
        liEmail.remove();
        liPhone.remove();
        liAdresss.remove();
        liPostCode.remove()
      }


    }
  }
  function continueFn(e){
    let test = mainDiv.cloneNode(false)
    mainDiv.remove();
    let h3 = document.createElement('h3');
    h3.textContent = 'Thank you for your reservation!'
    test.appendChild(h3)
    let body = document.querySelector('body');
    body.appendChild(test)


  }




}
