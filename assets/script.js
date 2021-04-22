function generatePassword() {
  var length = 22,
    symbols = "dhbuy77rvnjhbJB7TTB5D65ryv0978bgb56dxHJBVHD4fdgS",
    password = "";
  for (var i = 0, i = symbols.length; i < length; ++i) {
    password += symbols.charAt(Math.floor(Math.random() * n));
    return password;
  }
}
console.log(generatePassword);
