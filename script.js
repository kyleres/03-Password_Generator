//Universal Variables
let form = document.getElementById("form")
let passwordText = document.getElementById("password")

let charLength = document.getElementById("charLength")
let checkLowCase = document.getElementById("checkLowCase")
let checkUpCase = document.getElementById("checkUpCase")
let checkDigit = document.getElementById("checkDigit")
let checkSpecial = document.getElementById("checkSpecial")

//Character Set Arrays
let charSetLowCase = charSetMinToMax(97, 122)
let charSetUpCase = charSetMinToMax(65, 90)
let charSetDigit = charSetMinToMax(48, 57)
let charSetSpecial = charSetMinToMax(33, 47).concat(charSetMinToMax(58, 64)).concat(charSetMinToMax(91, 96)).concat(charSetMinToMax(123, 126))

//Password Display and Form Function
form.addEventListener('submit', event => {
  event.preventDefault()
  let charLengthValue = charLength.value
  let checkLowCaseBoolean = checkLowCase.checked
  let checkUpCaseBoolean = checkUpCase.checked
  let checkDigitBoolean = checkDigit.checked
  let checkSpecialBoolean = checkSpecial.checked
  let password = generatePassword(charLengthValue, checkLowCaseBoolean, checkUpCaseBoolean, checkDigitBoolean, checkSpecialBoolean)
  passwordText.innerText = password
  if (checkLowCaseBoolean == false && checkUpCaseBoolean == false && checkDigitBoolean == false && checkSpecialBoolean == false) {
    alert("Please check at least one of the boxes to continue.")
  }
  if (charLengthValue < 8 || charLengthValue > 128) {
    alert("Please choose a password length of between 8 - 128 characters to continue.")
  }
})

//Generate Button Function
function generatePassword(charLengthValue, checkLowCaseBoolean, checkUpCaseBoolean, checkDigitBoolean, checkSpecialBoolean) {
  let charSet = []
  if (checkLowCaseBoolean) {
    charSet = charSet.concat(charSetLowCase)
  }
  if (checkUpCaseBoolean) {
    charSet = charSet.concat(charSetUpCase)
  }
  if (checkDigitBoolean) {
    charSet = charSet.concat(charSetDigit)
  }
  if (checkSpecialBoolean) {
    charSet = charSet.concat(charSetSpecial)
  }

  let passwordCharSet = []
  for (var i = 0; i < charLengthValue; i++) {
    let charSetRandom = charSet[Math.floor(Math.random() * charSet.length)]
    passwordCharSet.push(String.fromCharCode(charSetRandom))
  }
  return passwordCharSet.join("")
}

//Password Character Set Function
function charSetMinToMax(low, high) {
  let charSetArray = []
  for (var i = low; i <= high; i++) {
    charSetArray.push(i)
  }
  return charSetArray
}