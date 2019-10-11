const bblSort = (inputArray) => {
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0; j < inputArray.length-i; j++) {
      if(inputArray[j] > inputArray[j+1]) {
        let temp = inputArray[j+1]
        inputArray[j+1] = inputArray[j]
        inputArray[j] = temp
      }
    }
    console.log(inputArray);
  }
};

bblSort([56,36,68,73,-34,20,43,91,10,14])
