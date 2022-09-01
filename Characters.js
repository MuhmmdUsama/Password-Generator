const num = '1234567890',
  lower = 'abcdefghijklmnopqrstuvwxyz',
  upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  symbol = '!@#$%&*()_=+';

export function getNumber() {
  return num[Math.floor(Math.random() * num.length)];
}
export function getLower() {
  return lower[Math.floor(Math.random() * lower.length)];
}
export function getUpper() {
  return upper[Math.floor(Math.random() * upper.length)];
}
export function getSymbol() {
  return symbol[Math.floor(Math.random() * symbol.length)];
}
