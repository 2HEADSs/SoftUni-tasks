function lockedProfile() {
  let elements = Array.from(document.querySelectorAll('.profile button'));
  for (let el of elements) {
    el.addEventListener('click', onToggle);
  }

    function onToggle(e) {
      let currentProfile = e.target.parentElement;

      let radioBt = currentProfile.querySelector(
        'input[type="radio"][value="unlock"]'
      ).checked;
      if (radioBt) {
        let infoDiv = currentProfile.querySelector('div');
        if ((e.target.textContent == 'Show more')) {
          e.target.textContent = 'Hide it';
          infoDiv.style.display = 'block';
        } else {
          infoDiv.style.display = '';
          e.target.textContent = 'Show more';
        }
      }
    }
  }
