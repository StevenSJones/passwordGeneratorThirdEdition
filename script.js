var generateBtn = document.querySelector("#generate"); //assigning

//min and max chars per specs
var minChar = 8;
var maxChar = 128;

// constant Array of numbers to be included in password declared globally
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// constant Array of special chars to be included in password declared globally
const specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// constant Array of lowercase chars to be included in password declared globally
const lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// constant Array of uppercase chars to be included in password declared globally
const upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// function to write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//pull single random number index from specified array
function getRand(arr) {
  var randOut = arr[Math.floor(Math.random() * arr.length)];
  return randOut;
}

//Main password generating function
function generatePassword() {
  //setting options equal to an empty object
  var options = {};

  //prompting the user to input desired password length.
  //using the parseInt function to turn any input that isn't a number to a number.
  options.length = parseInt(
    prompt(
      "How many characters from 8 - 128 would you like for your password to be?"
    )
  );

  //Logic for the min/max char parameters
  if (options.length < 8 || options.length > 128) {
    alert(
      "Please input between 8 and 128 characters for the generator to process your password request."
    );
    return "Invalid parameters";
  }
  //prompting the user for the character-inclusive options in the form of confirms
  //going into the options object...
  options.special = confirm(
    "Would you like for your password to include special characters?"
  );
  options.numbers = confirm(
    "Would you like for your password to include numbers?"
  );
  options.upperCase = confirm(
    "Would you like for your password to include upper-cased characters?"
  );
  options.lowerCase = confirm(
    "Would you like for your password to include lower-cased characters?"
  );

  //   this is the empty var that will hold the password ultimately
  var password = "";
  //logic in the form of a for loop
  for (var i = 0; i < options.length; i++) {
    if (options.special) {
      password += getRand (specialCharacters);
    }
    if (options.lowerCase) {
      password += getRand(numbers);
    }
    if (options.lowerCase) {
      password += getRand(lowerCasedCharacters);
    }
    if (options.upperCase) {
      password += getRand(upperCasedCharacters);
    }
  }
  //Displays the characters inline next to the others in the password
  return password.substring(0, options.length);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
