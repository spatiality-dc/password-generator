//Valid password symbols
//const lower = "abcdefghijklmnopqrstuvwxyz";
//const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//const numbers = "0123456789";
//const symbols = "!@#%^&*=-_";

// Assignment Code
const generateBtn = document.querySelector("#generate");
const numEL = document.querySelector("#num");
const lowerEL = document.querySelector("#lower");
const upperEL = document.querySelector("#upper");
const symEL = document.querySelector("#sym");
var lengthEl = document.querySelector("#length");
var newPassword = document.getElementById("#password");

// Add event listener to generate button
generateBtn.addEventListener("click", function() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  var letterBag = lower;
  numEL.checked ? (letterBag += numbers) : "";
  upperEL.checked ? (letterBag += upper) : "";
  symEL.checked ? (letterBag += symbols) : "";
  newPassword.value = password(lengthEl.value, letterbag);
});

function generatePassword() {
  var length = 8,
    letterBag =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*",
    retVal = "";
  for (var i = 0, n = letterBag.length; i < length; ++i) {
    retVal += letterBag.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
