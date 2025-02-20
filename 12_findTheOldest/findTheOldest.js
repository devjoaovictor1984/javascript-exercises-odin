const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
      const currentYear = new Date().getFullYear();
      
      const ageOldest = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
      const agePerson = (person.yearOfDeath || currentYear) - person.yearOfBirth;
      
      return agePerson > ageOldest ? person : oldest;
    });
  };
  
  module.exports = findTheOldest;
      