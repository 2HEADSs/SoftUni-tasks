function lockedProfile() {
  Array.from(document.querySelectorAll('.profile button')).forEach(
    (b) => b.addEventListener('click', onToggle)
  );

  function onToggle(e) {
    let profile = e.target.parentElement;
    let isActive = profile.querySelector(
      'input[type="radio"][value="unlock"]'
    ).checked;

    if (isActive) {
      //short version because we have only one div
      let infoDiv = profile.querySelector('div');
    //   let infoDiv = Array.from(profile.querySelectorAll('div')).find((d) =>
    //     d.id.includes('HiddenFields')
    //   );

      if (e.target.textContent == 'Show more') {
        e.target.textContent = 'Hide it';
        infoDiv.style.display = 'block';
      } else {
        infoDiv.style.display = '';
        e.target.textContent = 'Show more';
      }
    }
  }
}


// function lockedProfile() {
//   // Array.from(document.querySelectorAll('.profile button')).forEach(
//   //   (b) => b.addEventListener('click', onToggle)
//   // );

//   document.getElementById('main').addEventListener('click', onToggle);

//   function onToggle(e) {
//     if (e.target.tagName == 'BUTTON') {
//       let profile = e.target.parentElement;
//       let isActive = profile.querySelector(
//         'input[type="radio"][value="unlock"]'
//       ).checked;

//       if (isActive) {
//         //short version because we have only one div
//         let infoDiv = profile.querySelector('div');
//         //   let infoDiv = Array.from(profile.querySelectorAll('div')).find((d) =>
//         //     d.id.includes('HiddenFields')
//         //   );

//         if (e.target.textContent == 'Show more') {
//           e.target.textContent = 'Hide it';
//           infoDiv.style.display = 'block';
//         } else {
//           infoDiv.style.display = '';
//           e.target.textContent = 'Show more';
//         }
//       }
//     }
//   }
// }