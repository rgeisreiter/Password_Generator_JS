// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordLength = prompt(
    "How many characters would you like the password to contain? Between 8 and 128 characters"
  );
  if (passwordLength < 8) {
    alert("Password length must be at least 8 characters");
  } else if (passwordLength > 128) {
    alert("Password length must be less than 128 characters");
  }
  var specialChar = confirm("Click OK to confirm special characters"); //confrim = true -- cancel = false
  var numericChar = confirm("Click OK to confirm numeric characters");
  var lowerChar = confirm("Click OK to confirm lowercase characters");
  var upperChar = confirm("Click OK to confirm uppercase characters");

  if (
    (specialChar = false) &&
    (numericChar = false) &&
    (lowerChar = false) &&
    (upperChar = false)
  ) {
    alert("Must select at least one character type");
  }

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword();
