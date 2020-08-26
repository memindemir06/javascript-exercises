function add(a, b) {
  if (typeof a === "number" && typeof b === "number") return a + b;
  return "ERROR";
}

function subtract(a, b) {
  if (typeof a === "number" && typeof b === "number") return a - b;
  return "ERROR";
}

function sum(arr) {
  let res = arr.reduce((sum, el) => {
    if (typeof el === "number") sum += el;
    return sum;
  }, 0);
  return res;
}

function multiply(arr) {
  let res = arr.reduce((sum, el) => {
    if (typeof el === "number") sum *= el;
    return sum;
  }, 1);
  return res;
}

function power(a, b) {
  return Math.pow(a, b);
}

function factorial(num) {
  if (typeof num !== "number") return "ERROR";
  let res = 1;
  for (let i = 1; i <= num; i++) {
    res *= i;
  }
  return res;
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
