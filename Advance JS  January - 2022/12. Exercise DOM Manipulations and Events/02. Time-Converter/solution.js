function attachEventsListeners() {
  let daysInputElement = document.getElementById('days');
  let hoursInputElement = document.getElementById('hours');
  let minutesInputElement = document.getElementById('minutes');
  let secondsInputElement = document.getElementById('seconds');

  document.querySelector('main').addEventListener('click', onConvert);
  //   document.getElementById('daysBtn').addEventListener('click', onConvert);
  //   document.getElementById('hoursBtn').addEventListener('click', onConvert);
  //   document.getElementById('minutesBtn').addEventListener('click', onConvert);
  //   document.getElementById('secondsBtn').addEventListener('click', onConvert);

  function onConvert(e) {
    if (e.target.type === 'button') {
      if (daysInputElement.value !== '') {
        hoursInputElement.value = Number(daysInputElement.value) * 24;
        minutesInputElement.value = Number(daysInputElement.value) * 1440;
        secondsInputElement.value = Number(daysInputElement.value) * 86400;
      } else if (hoursInputElement.value !== '') {
        daysInputElement.value = Number(hoursInputElement.value) / 24;
        minutesInputElement.value = Number(hoursInputElement.value) * 60;
        secondsInputElement.value = Number(hoursInputElement.value) * 3600;
      } else if (minutesInputElement.value !== '') {
        daysInputElement.value = Number(minutesInputElement.value) / 1440;
        hoursInputElement.value = Number(minutesInputElement.value) / 60;
        secondsInputElement.value = Number(minutesInputElement.value) * 60;
      } else if (secondsInputElement.value !== '') {
        daysInputElement.value = Number(secondsInputElement.value) / 86400;
        hoursInputElement.value = Number(secondsInputElement.value) / 3600;
        minutesInputElement.value = Number(secondsInputElement.value) / 60;
      }
    }
  }
}
