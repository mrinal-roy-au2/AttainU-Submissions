largest = (arrayArg) => {
  var temp = arrayArg[0]
  for (let i = 0; i < arrayArg.length; i++) {
    temp = (temp >= arrayArg[i]) ? temp : arrayArg[i];
  }
  console.log(`The largest of the numbers in the array is: ${temp}`);
  return temp;
}
smallest = (arrayArg) => {
  var temp = arrayArg[0]
  for (let i = 0; i < arrayArg.length; i++) {
    temp = (temp <= arrayArg[i]) ? temp : arrayArg[i];
  }
  console.log(`The smallest of the numbers in the array is: ${temp}`);
  return temp;
}

largest([34, -89, -67, 9,0, -93, 54, 23])
smallest([34, -89, -67, 9,0, -93, 54, 23])
