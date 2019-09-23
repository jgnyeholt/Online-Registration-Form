document.addEventListener("DOMContentLoaded", () =>{
//Name
  const fullName = document.getElementById("full-name");
  const fullNameError = document.getElementById("full-name-error");
  isTypingValid(fullName, /^[a-zA-z ]+$/, fullNameError, "Please enter your full name containing letters a-z.", null, null);
//Email
  const emailAddress = document.getElementById("email-address");
  const emailAddressError = document.getElementById("email-address-error");
  isTypingValid(emailAddress, /^[^@]+@[^@.]+.[a-z]+$/i, emailAddressError, "Please enter your email containing an @ and .domain", null, null);
//Phone
  const phoneNumber = document.getElementById("phone-number");
  const phoneNumberError = document.getElementById("phone-number-error");
  isTypingValid(phoneNumber, /^[0-9]+$/, phoneNumberError, "Please enter your 10 digit phone number",null , 10);
//Address
  const streetAddress = document.getElementById("street-address");
  const streetAddressError = document.getElementById("street-address-error");
  isTypingValid(streetAddress, /^[\w .,]+$/, streetAddressError, "Please enter street address containing only digits, letters, and punctuation.", null, null);
//City
  const city = document.getElementById("city");
  const cityError = document.getElementById("city-error");
  isTypingValid(city, /^[a-zA-Z ]+$/, cityError, "Please enter city containing only letters and spaces", null, null);
//State
  const state = document.getElementById("state");
  const stateError = document.getElementById("state-error");
  isTypingValid(state, /[\w]/, stateError, "Please select a state from the list", null, 3);
//Zip code
  const zip = document.getElementById("zip-code");
  const zipError = document.getElementById("zip-code-error");
  isTypingValid(zip, /[0-9]+/, zipError, "Please enter a zip code containing at least 5 digits.", 5, null);


//Check validity on form submission
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let validArray = [];
    let validName = validate(fullName, /^[a-zA-z ]+$/, fullNameError, "Please enter your full name containing letters a-z.", null, null)
    let validEmail = validate(emailAddress, /^[^@]+@[^@.]+.[a-z]+$/i, emailAddressError, "Please enter your email containing an @ and .domain", null, null);
    let validPhone = validate(phoneNumber, /^[0-9]+$/, phoneNumberError, "Please enter your 10 digit phone number",null , 10);
    let validStreet = validate(streetAddress, /^[\w .,]+$/, streetAddressError, "Please enter street address containing only digits, letters, and punctuation.", null, null);
    let validCity = validate(city, /^[a-zA-Z ]+$/, cityError, "Please enter city containing only letters and spaces", null, null);
    let validState = validate(state, /[\w]/, stateError, "Please select a state from the list", null, null);
    let validZip = validate(zip, /[0-9]+/, zipError, "Please enter a zip code containing at least 5 digits.", 5, null);

    validArray.push(validName, validEmail, validPhone, validStreet, validCity, validState, validZip);

    let validCheck = validArray.filter(bool => bool === true);
    if(validCheck.length === validArray.length){
      form.submit();
    }
  });




  function isTypingValid(inputElement, validregex, errorElement, message, lengthMin, lengthMax){
    inputElement.addEventListener("input", (e) => {
      validate(inputElement, validregex, errorElement, message, lengthMin, lengthMax);
    });//end input event listener
  } // end isValid funtion


}); //end DOM content loaded

function validate(inputElement, validregex, errorElement, message, lengthMin, lengthMax){
  let string = inputElement.value;
  let strLength = string.length;
  let valid = validregex.test(string);
  //checking length range
  if(lengthMin !== null && lengthMax !== null){
    if(strLength > lengthMin && strLength < lengthMax){
      valid = false;
    }
  }
  //checking minimum length requirement
  if(lengthMin !== null){
    if(strLength < lengthMin){
      valid = false;
    }
  }
  //checking maximum length requirement
  if(lengthMax !== null){
    if(strLength > lengthMax){
      valid = false;
    }
  }
  //add error message per validity
  if(valid){
    errorElement.style.opacity = "0";
  } else if(!valid) {
    errorElement.textContent = message;
    errorElement.style.opacity = "1";
  }
  console.log(valid);
  return valid;
}
