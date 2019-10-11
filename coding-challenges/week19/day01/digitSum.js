const digitSumOfExpo = (a,b) => {
  let expoResult = Math.pow(a,b)
  var N = expoResult
  var sumOfDigits = 0
  while(N%10 !== N) {
    sumOfDigits += (N%10)
    N = (N - (N%10))/10
  }
  sumOfDigits += N
  console.log(sumOfDigits);
};

digitSumOfExpo(2,15)
digitSumOfExpo(2,1000)
