/**
 * Exercise 7
 * Create a function that simulates a Russian Roulet.
 */
function createRussianRoulette() {
  const i = 5;
  let shooted = false;

  return () => {
    if (shooted) {
        return "stop it! it's already dead!";
    }
    
    if (i === Math.ceil(Math.random() * 5)) {
        shooted = true;
        return "BANG!";
    }
    
    return "ufa";
  }
}

const russianRoulette = createRussianRoulette();
// console.log(russianRoulette());
// console.log(russianRoulette());
// console.log(russianRoulette());
// console.log(russianRoulette());
// console.log(russianRoulette());
// console.log(russianRoulette());
// console.log(russianRoulette());