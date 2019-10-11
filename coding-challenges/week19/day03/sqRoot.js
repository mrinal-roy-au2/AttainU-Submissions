const sqRoot = (arg) => {
  for(var i=1; Math.pow(i,2) <= arg; ++i) {
    if((Math.pow(i,2)) < arg){
      continue
    }
  }
  var left = i-1
  var right = i
for(var n=1; n<5; n++) {
  if(Math.pow((left+right)/2,2) > arg) {
    right = (left+right)/2
  } else {
    left = (left+right)/2
  }
}
console.log("Square Root of "+arg+" is "+left);
}
sqRoot(11)
sqRoot(16)
sqRoot(8)
sqRoot(9)
