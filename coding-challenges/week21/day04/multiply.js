const stringToNum = (arg) => {
  let Num = 0
  for (let i = 0; i < arg.length; i++) {
    Num = Num + arg.charAt(i)*(10**(arg.length-(i+1)))
  }
  return Num
};

const numToString = (arg) => {
  let N = arg
  let digitStr = ''
  while(N%10 !== N) {
    digitStr = digitStr + (N%10)
    N = (N - (N%10))/10
  }
  digitStr = digitStr + (N)
  let resultStr = ''
  for (let i = digitStr.length-1; i >= 0; i--) {
    resultStr = resultStr + digitStr.charAt(i)
  }
  return resultStr
};

const multiplyOnlyString = (arg1, arg2) => {
  let num1 = stringToNum(arg1)
  let num2 = stringToNum(arg2)
  console.log(numToString(num1*num2));
};

multiplyOnlyString("123", "456")
