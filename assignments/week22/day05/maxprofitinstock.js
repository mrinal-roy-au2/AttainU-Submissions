const stockprofitmax = (arr) => {
  const min_stock = minVal(arr)
  const indOfMin = arr.indexOf(min_stock)
  if (indOfMin<arr.length-1) {
    var restData = arr.slice(indOfMin+1,arr.length+1)
  } else if(indOfMin===arr.length-1){
    restData = arr.slice(indOfMin,arr.length+1)
    arr.pop()
    stockprofitmax(arr)
  }
  console.log(restData);
  const max_stock = maxVal(restData)
  console.log(max_stock-min_stock);
  return max_stock-min_stock
};



const minVal = (arg) => {
  var min_temp = arg[0]
  for (let i = 0; i < arg.length; i++) {
    min_temp = (arg[i] <= min_temp) ? arg[i]: min_temp
  }
  return min_temp
};

const maxVal = (arg) => {
  var max_temp = arg[0]
  for (let i = 0; i < arg.length; i++) {
    max_temp = (arg[i] >= max_temp) ? arg[i]: max_temp
  }
  return max_temp
};

stockprofitmax([60, 50, 40, 55, 37.5, 56, 70])
stockprofitmax([7,1,5,3,6,4])
stockprofitmax([7,1,5,3,6,0])
stockprofitmax([7,1,5,3,4,2])
