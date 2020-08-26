const palindromes = function (word) {
  word = word.toLowerCase();
  const reg = /[a-zA-Z]/;
  if (word.length === 1) return true;
  let start = 0;
  let end = word.length - 1;
  while (start < end) {
    if (
      word[start].match(reg) &&
      word[end].match(reg) &&
      word[start] !== word[end]
    ) {
      return false;
    } else if (word[start].match(reg) && !word[end].match(reg)) {
      end--;
      continue;
    } else if (!word[start].match(reg) && word[end].match(reg)) {
      start++;
      continue;
    }
    end--;
    start++;
  }
  return true;
};

module.exports = palindromes;
