/*jshint esversion: 6*/

function checkPowerOfTwo (arg) {
  var N = Math.log2(arg);
  if (N === parseInt(N)){
    return true;
  } else {
    return false;
  }
}

checkPowerOfTwo(16);
checkPowerOfTwo(17);
