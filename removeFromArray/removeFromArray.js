const removeFromArray = function (list, ...arr) {
  for (let i = 0; i < list.length; i++) {
    const el = list[i];
    for (let j = 0; j < arr.length; j++) {
      const comp = arr[j];
      if (el === comp) {
        list.splice(i, 1);
        i--;
        break;
      }
    }
  }
  return list;
};

module.exports = removeFromArray;
