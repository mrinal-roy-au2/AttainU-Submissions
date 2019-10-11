const isPrime = (arg) => {
  var PRIMECOND = false
  if ((arg===1) || (arg===2) || (arg===3)){
    PRIMECOND = true
  } else if (arg>3) {
    for (let i = 2; i < arg; i++) {
      if(arg%i === 0){
        PRIMECOND = false
        break;
      } else {
        PRIMECOND = true
      }
    }
  }
return(PRIMECOND)
};


const findPrimes = (N) => {
  for (let i = 1; i <= N; i++) {
    if(isPrime(i)){
      console.log(i);
    }
  }
};

findPrimes(17)
findPrimes(100)
