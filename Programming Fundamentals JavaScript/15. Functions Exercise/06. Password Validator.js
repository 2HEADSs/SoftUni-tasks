function passValidator(string) {
  let lengthS = string.length;

  let lengthIsValid = lengthCount();
  let consistLetteresAndDigits = consist(string);
  let haveTwoDigits = sumDigit(string);

  if (lengthIsValid && consistLetteresAndDigits && haveTwoDigits) {
    console.log("Password is valid");
  }
  function lengthCount() {
    if (lengthS >= 6 && lengthS <= 10) {
      return true;
    } else {
      console.log("Password must be between 6 and 10 characters");
      return false;
    }
  }
  function consist(string) {
    for (let i = 0; i < lengthS; i++) {
      let current = string[i];
      let charCode = current.charCodeAt(0);
      if (
        !(charCode >= 48 && charCode <= 57) &&
        !(charCode >= 65 && charCode <= 90) &&
        !(charCode >= 97 && charCode <= 122)
      ) {
        console.log("Password must consist only of letters and digits");
        return false;
      }
    }
    return true;
  }
  function sumDigit(string) {
    let digits = 0;
    for (let i = 0; i < lengthS; i++) {
      let current = string[i];
      let charCode = current.charCodeAt(0);
      if (charCode >= 48 && charCode <= 57) {
        digits++;
      }
    }
    if (digits >= 2) {
      return true;
    } else {
      console.log("Password must have at least 2 digits");
    }
  }
}
passValidator("logIn");
passValidator("MyPass123");
passValidator("Pa$s$s");
