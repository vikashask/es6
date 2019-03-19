'use strict'

var isPrime = function(n) {
    for(let i = 2; i < n; i++) {
      if(n % i == 0) return false;
    }
  return n > 1; }

  var sumOfPrimes = function(n) {
    var sum = 0;
    for(let i = 1; i <= n; i++) {
      if(isPrime(i)) sum += i;
    }

    console.log("--",sum);
    
  return sum; }

  console.log('checking prime is not :',isPrime(7));
  
  console.log(sumOfPrimes(15),'----');  