const person = {
  firstName: 'Hasham',
  lastName: 'Qaiser',
  hobby: 'coding',
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log(fullName);

person.previousJob = 'sales agent';
console.log(person.previousJob);

person['previousJob'] = 'freelance artist';
console.log(person['previousJob']);

console.log(person);
