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

const permuteString = (input) => {
  var arr = input.split('')
  for(let i=0; i<arr; i++){
    for(let j=i; j<arr; j++){
      swap(arr[i], arr[j])

    }
  }

};

permuteString("gjhgfdfsdf")
