/**
 * Exercise 2
 * Change the function to a filter function:
 */
Array.prototype.myFilter = function(callback) {
    const newArray = [];
    for (const i of this) {
        if (callback(i)) {
            newArray.push(i);
        }
    }
    return newArray;
}

const array = [1, 2, 3];
// console.log('2 - ', array.myFilter((val) => val === 2));