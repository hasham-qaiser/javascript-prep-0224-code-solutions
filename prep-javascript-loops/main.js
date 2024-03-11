function whileLoop1() {
  const newArray = [];
  let index = 0;
  while (index < 10) {
    newArray.push(index);
    index++;
  }
  return newArray;
}
console.log(whileLoop1());

function whileLoop2() {
  const newArray = [];
  let index = 0;
  while (index < 20) {
    newArray.push(index);
    index += 2;
  }
  return newArray;
}
console.log(whileLoop2());

function forLoop1() {
  const newArray = [];
  for (let index = 0; index < 10; index++) {
    newArray.push(index);
  }
  return newArray;
}
console.log(forLoop1());

function forLoop2() {
  for (let index = 100; index >= 0; index--) {
    console.log('Time to explosion: ' + index);
  }
}
forLoop2();

const person = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(object) {
  const newArray = [];
  for (const object in person) {
    newArray.push(object);
  }
  return newArray;
}

const forInLoop1Result = forInLoop1(person);
console.log(forInLoop1Result);

function forInLoop2(object) {
  const newArray = [];
  for (const key in object) {
    newArray.push(object[key]);
  }
  return newArray;
}

const forInLoop2Result = forInLoop2(person);
console.log(forInLoop2Result);
