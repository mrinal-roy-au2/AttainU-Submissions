const reverseNum = (arg) => {
  var N = arg
  var digitArr = []
  while(N%10 !== N) {
    digitArr.push(N%10)
    N = (N - (N%10))/10
  }
  digitArr.push(N)
  console.log(digitArr);
  var reversedNumber = 0
  for (var i = 0; i < digitArr.length; i++) {
    reversedNumber += parseInt(digitArr[i])*Math.pow(10,digitArr.length-i-1)
  }
  console.log(reversedNumber);
};



reverseNum(15)
reverseNum(123)
reverseNum(-426)
reverseNum(130)
reverseNum(2568978965)
