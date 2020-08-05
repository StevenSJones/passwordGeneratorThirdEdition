var generateBtn = document.getElementById("generate");//assigning generateBtn to a DOM method that looks at the HTML and any elements that match this specific ID
var charInput = document.getElementById("numOfChar");
var upperInput = document.getElementById("upperCase");
var lowerInput = document.getElementById("lowerCase");
var specInput = document.getElementById("specChar");
var numbersInput = document.getElementById("numbers");

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var minChar = 8;
var maxChar = 128;

// User variables
var numOfChar = 0;
var specChar = false;
var nums = false;
var upperCase = false;
var lowerCase = false;

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
    "."
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
    "z"
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
    "Z"
  ];

//   this is the empty var that will hold the password ultimately
  var password = "";

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
