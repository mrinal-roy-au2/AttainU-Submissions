const diffOfSq = (N) => {
  let sqSum = 0;
  let sumSq = 0;
  let i = 1;
  while(i<=N) {
    sqSum += Math.pow(i,2)
    i++
  }
  sumSq += Math.pow((N*(N+1)),2)/4
  console.log(sumSq - sqSum);
};

diffOfSq(10)
diffOfSq(100)
