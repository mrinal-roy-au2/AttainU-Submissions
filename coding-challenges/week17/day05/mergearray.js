const mergeArrays = (arr1, arr2) => {
  let finalArray = []
  arr1.forEach(element => finalArray.push(element))
  arr2.forEach(element => finalArray.push(element))
  console.log(finalArray);
  return finalArray
}

A = [5, 67, 34, 89]
B = [3, 4, 5, 6, 7, 9]

mergeArrays(A, B)

//Below method uses spread operator
const mergeTwoArrays = (arr1, arr2) => {
  let mergedArray = [...arr1, ...arr2]
  console.log(mergedArray);
  return mergedArray;
}

C = [15, 27, 34, 89, 91]
D = [3, 4, 5, 6, 7, 9, 56, 57]

mergeTwoArrays(C, D)
