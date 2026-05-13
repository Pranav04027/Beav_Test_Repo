function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  let result = 0;
  for (let i = 0; i < a; i++) {
    result += b;
  }
  return result;
}

function divide(a, b) {
  return a / b;
}

function average(numbers) {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

function factorial(n) {
  if (n < 0) return -1;
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function absolute(n) {
  if (n < 0) return -n;
  return n;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  average,
  factorial,
  power,
  absolute,
};
