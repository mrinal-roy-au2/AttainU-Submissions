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
    console.log(`${uniqueElements[i]}==>${count}`);
    console.log(freq);
  }
};

const removeDup = (arrArg) => {
  arrArg.sort(function(a,b){return a-b})
  let unqArr = []
  for (let i = 0; i < arrArg.length; i++) {
    if (!unqArr.includes(arrArg[i])) {
      unqArr.push(arrArg[i])
    }
  }
  // console.log(unqArr);
  return unqArr
};

freqOfElements([10, 20, 20, 10, 10, 20, 5, 20])
freqOfElements([10, 20, 20])
