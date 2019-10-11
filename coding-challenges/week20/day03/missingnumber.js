const findMissing = (numArr) => {
  var i=0
  var missingArr = []
  while(i < numArr.length){
    if (numArr[i+1]-numArr[i] !== 1) {
      for (let j = 1; j < numArr[i+1]-numArr[i]; j++) {
        missingArr.push(numArr[i]+j)
      }
    }
    i++
  }
  console.log(missingArr);
  // return missingArr;
};

findMissing([1, 2, 3, 4, 5, 6, 7, 9, 11, 12, 13, 14, 15])
findMissing([1, 2, 4, 5, 6])
