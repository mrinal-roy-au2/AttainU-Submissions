const selSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minLocation = i
    for (let j = i+1; j < arr.length; j++) {
      if(arr[minLocation] > arr[j]) {
        let minIndex = arr.indexOf(arr[j])
        let lowerTemp = arr[minLocation]
        arr[minLocation] = arr[minIndex]
        arr[minIndex] = lowerTemp
      }
    }
    console.log(arr);
  }
  console.log(arr);
};


selSort([56,36,68,73,-34,20,43,91,10,14])
