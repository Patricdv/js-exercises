/**
 * Exercise 4
 * Create a function pipe that receives a initial value and pass by some functions.
 */ 
Array.prototype.pipe = function (value) {
  for (const i of this) {
    value = i(value);
  }
  return value;
}

const add = (val) => (val + 2);
const double = (val) => val * val;

// console.log([add, double, add, double, add].pipe(2));