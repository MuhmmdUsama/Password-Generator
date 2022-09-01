let pwContaintEl = document.getElementById('pw-containt');
let copyEl = document.getElementById('copy');
let pwLengthEl = document.getElementById('pw-length');
let numberEl = document.getElementById('number');
let lowerEl = document.getElementById('lower');
let upperEl = document.getElementById('upper');
let symbolEl = document.getElementById('symbol');
let generateEl = document.getElementById('generate');

const num = '1234567890',
  lower = 'abcdefghijklmnopqrstuvwxyz',
  upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  symbol = '!@#$%&*()_=+';

let view = '';
function getNumber() {
  return num[Math.floor(Math.random() * num.length)];
}
function getLower() {
  return lower[Math.floor(Math.random() * lower.length)];
}
function getUpper() {
  return upper[Math.floor(Math.random() * upper.length)];
}
function getSymbol() {
  return symbol[Math.floor(Math.random() * symbol.length)];
}