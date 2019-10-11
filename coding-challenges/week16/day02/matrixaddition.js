function checkMatrixForAddition(mat1Input, mat2Input){
  if (mat1Input.length===mat2Input.length) {
      var rank = mat1Input.length
      for (var i = 0; i < mat1Input.length; i++){
        if(mat1Input[i].length===rank){
          continue;
        } else {
          return false
        }
        }
        return true;
    } else {
      return false;
    }
  }


function addMatrices(mat1Input, mat2Input){
  if (checkMatrixForAddition(mat1Input, mat2Input)) {
    var resultMat = []
    var rank = mat1Input.length
    for (var p = 0; p < rank; p++) {
      resultMat[p] = []
      for (var q = 0; q < rank; q++) {
        resultMat[p].push(mat1Input[p][q] + mat2Input[p][q])
      }
    }
    console.log(resultMat);
  } else {
    console.log("Matrices cannot be added");
  }
}

var a = [[1, 1, 1, 1],[2, 2, 2, 2],[3, 3, 3, 3],[4, 4, 4, 4]];

var b = [[1, 1, 1, 1],[2, 2, 2, 2],[3, 3, 3, 3],[4, 4, 4, 4]];

addMatrices(a, b)
