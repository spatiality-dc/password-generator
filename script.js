//Valid password symbols
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#%^&*=-_";

// Assignment Code
const generateBtn = document.querySelector("#generate");
const numEL = document.querySelector("#num");
const lowerEL = document.querySelector("#lower");
//const lengthEl

console.log(generatePassword(12, lower));

// Add event listener to generate button
generateBtn.addEventListener("click", function() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
});

function generatePassword(l, characters) {
  var letterBag = "";
  for (var i = 0; i < l; i++) {
    letterBag += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
    return letterBag;
  }

  debugger;

  // if (lowerEL.checked) {
  //   letterBag += lower;
  // }

  if (numEL.checked) {
    letterBag += numbers;
  }

  var result = "";

  for (let letter = 0; letter < charNumEl.valueAsNumber; letter++) {
    //result +=
  }

  return result;
}

//Check charNum box for value

//Use value of charNum to determine password length

//Is num box ticked?

//If yes, add numbers to random generator array

//Is sym box ticked?

//If yes, add numbers to random generator array

//Once all elements checked, eventListener

//writePassword
