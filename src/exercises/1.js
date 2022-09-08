/**
 * Exercise 1
 * Create your own map function for arrays:
 */
Array.prototype.myMap = function(callback) {
    const newArray = [];
    for (const i of this) {
        newArray.push(callback(i));
    }
    return newArray;
}

const array = [1, 2, 3];
// console.log('1 - ', array.myMap((val) => val * 2));
