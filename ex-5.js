function sum(...number) {
  let sumValue = number.reduce((accNum, currNum) => (accNum += currNum), 0);
  return sumValue;
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
