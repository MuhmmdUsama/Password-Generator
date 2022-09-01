import { getLower, getNumber, getSymbol, getUpper } from './Characters.js';

let pwContaintEl = document.getElementById('pw-containt');
let copyEl = document.getElementById('copy');
let pwLengthEl = document.getElementById('pw-length');
let numberEl = document.getElementById('number');
let lowerEl = document.getElementById('lower');
let upperEl = document.getElementById('upper');
let symbolEl = document.getElementById('symbol');
let generateEl = document.getElementById('generate');


function generatePassword() {
  let length = pwLengthEl.value;
  let passValue = '';
  if (length >= '8' || length <= '20') {
    for (let i = 0; i < length; i++) {
      let x = generateCheck();
      passValue += x;
    }
  } else {
    alert('Your Password Length Must Between " 8 " and " 20 "');
  }

  pwContaintEl.innerText = passValue;
  console.log(passValue + ' length: ' + passValue.length);
}

function generateCheck() {
  let gChecked = [];

  if (numberEl.checked) {
    gChecked.push(getNumber());
  }
  if (lowerEl.checked) {
    gChecked.push(getLower());
  }
  if (upperEl.checked) {
    gChecked.push(getUpper());
  }
  if (symbolEl.checked) {
    gChecked.push(getSymbol());
  }
  if (gChecked.length === 0) return '';

  return gChecked[Math.floor(Math.random() * gChecked.length)];
}

generateEl.addEventListener('click', generatePassword);

copyEl.onclick = function () {
  let content = pwContaintEl.textContent;
  navigator.clipboard.writeText(content);
  alert('Your Password Copied');
};
