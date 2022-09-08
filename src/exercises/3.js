/**
 * Exercise 3
 * Change the function to a filter function:
 */
Array.prototype.myReducer = function(callback, initialValue) {
    let acc = initialValue;
    let i = 0;
    if (!initialValue) {
      acc = this[0];
      i = 1;
    }

    for (; i < this.length; i++) {
        acc = callback(acc, this[i], i);
    }

    return acc;
}

const array = [1, 2, 3];
// console.log('3 - ', array.myReducer((acc, val, index) => ([...acc, val]), [10]));
