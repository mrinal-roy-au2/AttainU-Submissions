const removeDup = (arrArg) => {
  arrArg.sort(function(a,b){return a-b})
  let unqArr = []
  for (let i = 0; i < arrArg.length; i++) {
    if (!unqArr.includes(arrArg[i])) {
      unqArr.push(arrArg[i])
    }
  }
  console.log(unqArr);
};

removeDup([100, 1, 5, 25, 10])
removeDup([1, 2, 2, 3, 4, 5, 6, 6, 7])
removeDup([7,8, 7,9,11,1,3,4,8,11,5,3,5,3,5])
