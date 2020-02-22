//Valid password symbols
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#%^&*=-_";

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
});

function generatePassword() {
  var letterBag = lower;
  if (numEL.checked) {
    letterBag += numbers;
  }
  if (upperEL.checked) {
    letterBag += upper;
  }
  if (symEL.checked) {
    letterBag += symbols;
  }
  var retVal = "";
  var n = letterBag.length;

  for (var i = 0; i < lengthEl.valueAsNumber; i++) {
    retVal += letterBag.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

// Minimum length event listener
lengthEl.addEventListener("change", resetMinLength);

// resetMinLength function
function resetMinLength() {
  if (lengthEl.value < 8) window.location.reload();
  if (lengthEl.value > 128) window.location.reload();
}
