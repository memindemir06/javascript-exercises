const snakeCase = function (phrase) {
  let chars = phrase.split(/[^a-zA-Z]/);
  chars = chars.filter((el) => el);
  for (let i = 0; i < chars.length; i++) {
    let word = chars[i];
    const arr = word.split("");
    const index = arr.findIndex((el) => el.charCodeAt(0) < 97);
    if (index > 0) {
      let str1 = arr.slice(0, index).join("");
      let str2 = arr[index].toLowerCase() + arr.slice(index + 1).join("");
      chars.splice(i, 1, str1, str2);
      i++;
      continue;
    } else chars[i] = word.toLowerCase();
  }
  const res = chars.join("_");
  return res;
};

//console.log(snakeCase(""));

module.exports = snakeCase;
