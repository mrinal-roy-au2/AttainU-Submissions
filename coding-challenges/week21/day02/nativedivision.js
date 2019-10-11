const divide = (dividend, divisor) => {
  var div = Math.abs(dividend)
  var quotient = 0
  var net = 0
  for (let i = 0; net <= div; i++) {
    net = net + divisor
    quotient = i
  }
  console.log((div===dividend)?quotient:(-quotient));
};

divide(10,3)
divide(19,3)
divide(-16,3)
