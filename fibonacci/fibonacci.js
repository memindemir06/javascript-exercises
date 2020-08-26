const fibonacci = function (num) {
  if (num <= 0) return "OOPS";
  let arr = [1, 1];
  if (num === 1) {
    return 1;
  }
  if (num === 2) {
    return 2;
  } else {
    for (let i = 2; i < num; i++) {
      let newNum = arr[i - 1] + arr[i - 2];
      arr.push(newNum);
    }
  }
  return arr[arr.length - 1];
};

module.exports = fibonacci;
