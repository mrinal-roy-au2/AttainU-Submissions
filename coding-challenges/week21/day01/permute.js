const swap = (m, n, arr) => {
  let swapped_arr = []
  let temp = arr[m]
  arr[m] = arr[n]
  arr[n] = temp
  for (let i = 0; i < arr.length; i++) {
    swapped_arr.push(arr[i])
  }
  // console.log(swapped_arr);
  return swapped_arr
};

const permute = (inputArray) => {
  for (var i = 0; i < inputArray.length; i++) {
    for (var j = i+1; j <= inputArray.length; j++) {
      console.log(swap(i,j,inputArray));
    }
    // console.log(input);
  }
  // console.log(input);
  // console.log(arg);
};


permute(["A", "B", "C"])
