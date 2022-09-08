/**
 * Exercise 5
 * Create a function that returns a counter.
 */
function createCounter(callback) {
  const timerId = setTimeout(callback, 2000);
}

class Example {
  constructor() {
    createCounter(() => {
        isKrustyCrab();
        this.isPatric();
    })
  }

  isPatric() {
    console.log("Yes, it's Patric");
  }
}

function isKrustyCrab() {
    console.log("No, this is Patric");
}

// new Example();
