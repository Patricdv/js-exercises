/**
 * Exercise 6
 * Create a function that when called with a number, will return the average so far.
 */
function createAverageCounter() {
    let counter = [];

    function willReduce(counter) {
        return counter.reduce((acc, val) => (acc + val))
    }
    
    return (val) => {
      counter.push(val);
      return willReduce(counter) / counter.length;
    }
}

const averageCounter = createAverageCounter();
const averageCounter2 = createAverageCounter();

// console.log('6 - ', averageCounter(2));
// console.log('6 - ', averageCounter(4));
// console.log('6 - ', averageCounter(6));
// console.log('6 - ', averageCounter(8));
// console.log('6 - ', averageCounter(10));

// console.log('6.2 - ', averageCounter2(10));