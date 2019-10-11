const countnsay = (arg) => {
  const objCount = countdigits(arg)
};

const countdigits = (arg) => {
  let strNum = numToString(arg)
  let numFreq = freqOfElements(strNum)
  console.log(numFreq);
  return countObj
};


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


const freqOfElements = (arr) => {
  var uniqueElements = removeDup(arr)
  var freq = []
  for (let i = 0; i < uniqueElements.length; i++) {
    var count=0
    for (let j = 0; j < arr.length; j++) {
      if (uniqueElements[i] === arr[j]) {
        count++;
      }
    }
    freq.push({'element':uniqueElements[i], 'frequency':count})
  }
  return freq;
};

const removeDup = (arrArg) => {
  // arrArg.sort(function(a,b){return a-b})
  let unqArr = []
  for (let i = 0; i < arrArg.length; i++) {
    if (!unqArr.includes(arrArg[i])) {
      unqArr.push(arrArg[i])
    }
  }
  return unqArr
};

countnsay(12211)
/*
1                 one 1
11                two 1
21                one 2 one 1
1211              one 1 one 2 two 1
111221            three 1 two 2 one 1
312211            one 3 one 1
13112221


*/
