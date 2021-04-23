// Assignment Code
var generateBtn = document.querySelector("#generate");
var special = "!@#$%^&*()";
var numeric = "123456789";
var lower = "abcdefghi";
var upper = "ABCDEFGHIJK";

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
  var specialChar = confirm("Click OK to confirm special characters");
  var numericChar = confirm("Click OK to confirm numeric characters");
  var lowerChar = confirm("Click OK to confirm lowercase characters");
  var upperChar = confirm("Click OK to confirm uppercase characters");
  console.log(specialChar, numericChar, upperChar, lowerChar);

  if (
    (specialChar = false) &&
    (numericChar = false) &&
    (lowerChar = false) &&
    (upperChar = false)
  ) {
    alert("Must select at least one character type");
  }
  var items = {
    length: passwordLength,
    numeric: numericChar,
    lower: lowerChar,
    special: specialChar,
    upper: upperChar,
  };
  console.log(items);

  return items;
}

function createPassword(pWord) {
  var anyNumber = Math.floor(Math.random() * pWord.length);
  var anySymbol = pWord[anyNumber];
  return anySymbol;
}

function generatePassword() {
  var userItems = generateItems();
  console.log(userItems);
  var randomPassword = [];
  var items = [];

  if (userItems.special === true) {
    items = items + special;
    console.log(items);
  }
  if (userItems.numeric === true) {
    items = items + numeric;
    console.log(numeric);
  }
  if (userItems.lower === true) {
    items = items + lower;
    console.log(lower);
  }
  if (userItems.upper === true) {
    items = items + upper;
    console.log(upper);
  }
  var finalPassword = "";

  for (var i = 0; i < userItems.length; i++) {
    var selection = createPassword(items);
    finalPassword = finalPassword + selection;
  }

  // var string = randomPassword.toString("");
  // return string;
  return finalPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword();
