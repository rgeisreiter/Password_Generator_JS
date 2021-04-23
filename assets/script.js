// Assignment Code
var generateBtn = document.querySelector("#generate");
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "=", "+"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];

// Write password to the #password input

function generateItems() {
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
  var items = {
    length: length,
    special: special,
    numeric: numeric,
    lower: lower,
    special: special,
  };

  return items;
}

function createPassword(pWord) {
  var anyNumber = Math.floor(Math.random() * pWord.length);
  var anySymbol = pWord[anyNumber];
  return anySymbol;
}

function generatePassword() {
  var userItems = generateItems();
  var randomPassword = [];
  var items = [];

  if (userItems.lower === true) {
    items = items + special;
    console.log(items);
  }
  if (userItems.lower === true) {
    items = items + numeric;
    console.log(numeric);
  }
  if (userItems.lower === true) {
    items = items + lower;
    console.log(lower);
  }
  if (userItems.lower === true) {
    items = items + upper;
    console.log(upper);
  }

  for (var i = 0; i < userItems.length; i++) {
    var selection = createPassword(items);
    randomPassword = randomPassword + selection;
  }

  console.log(randomPassword.toString(""));
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword();
