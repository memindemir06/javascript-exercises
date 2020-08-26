const repeatString = function (str, num) {
  const adder = str;
  if (num < 0) {
    return "ERROR";
  } else if (num === 0) {
    return "";
  } else {
    for (let i = 0; i < num - 1; i++) {
      str += adder;
    }
  }
  return str;
};

module.exports = repeatString;
