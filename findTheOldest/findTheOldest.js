let findTheOldest = function (people) {
  const now = new Date();
  const today = now.getFullYear();
  let ages = [];
  return people.reduce((oldest, person) => {
    const age = person.hasOwnProperty("yearOfDeath")
      ? person.yearOfDeath - person.yearOfBirth
      : today - person.yearOfBirth;
    ages.push(age);
    oldest = Math.max(...ages) === age ? person : oldest;
    return oldest;
  }, {});
};

module.exports = findTheOldest;
