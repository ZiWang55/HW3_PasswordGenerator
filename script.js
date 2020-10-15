
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Various Arrays Characters
let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
let alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//settings for password length
function generatePassword() {
  let confirmLength = parseInt(prompt("Please choose the length for password"));
  //loop if incorrect input
  while (confirmLength <= 8 || confirmLength >= 128) {
    alert("password must be at least 8 characters")
    confirmLength = parseInt(prompt("Please set the length for password"));
  }
  // initialize choices to false so while loop be executed atleast once
  let confirmSpecialCharacter = false;

  let confirmNumericCharacter = false;

  let confirmUpperCase = false;

  let confirmLowerCase = false;

  let myPassword = "";

  // while loop will be executed until one option is true
  while (!confirmSpecialCharacter && !confirmNumericCharacter && !confirmUpperCase && !confirmLowerCase) {
    confirmSpecialCharacter = (confirm("Would you like Special Characters?"));
    confirmNumericCharacter = (confirm("Would you like Numeric Characters?"));
    confirmUpperCase = (confirm("Would you like Upper Case Characters?"));
    confirmLowerCase = (confirm("Would you like Lower Case Characters?"));
  }
  // depend upon user selection we are updating validCharacters array
  let validCharacters = []
  if (confirmSpecialCharacter) {
    validCharacters.push(...specialChar);

  }
  if (confirmLowerCase) {
    validCharacters.push(...alphaLower);
  }
  if (confirmUpperCase) {
    validCharacters.push(...alphaUpper);
  }
  if (confirmNumericCharacter) {
    validCharacters.push(...number);
  }
  // for loop for generating random index to get password
  console.log(validCharacters);

  for (i = 0; i < confirmLength; i++) {
    myPassword += validCharacters[Math.floor(Math.random() * validCharacters.length)]
  }
  console.log(myPassword);

  return myPassword;
}



