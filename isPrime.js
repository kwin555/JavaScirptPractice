function isPrime(num) {
    'use strict';
    if (num <= 1) {
        return false;
    } else if (num === 2) {
        return true;
    } else {
        for (let i = 2; i < num; i += 1) {
          if (num % i === 0) {
            return false;
          }
        }
        return true;
  }
}

console.log(isPrime(23));
