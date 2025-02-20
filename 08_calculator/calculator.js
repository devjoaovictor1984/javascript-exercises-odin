const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (array) => array.reduce((total, num) => total + num, 0);

const multiply = (array) => array.reduce((total, num) => total * num, 1);

const power = (a, b) => Math.pow(a, b);

const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
