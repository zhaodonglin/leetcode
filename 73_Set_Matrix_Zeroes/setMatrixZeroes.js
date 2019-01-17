var setZeroes = function(matrix) {
	var firstColumnIsZero = false
	var firstRowZero = false

	for (var i=0;i < matrix.length;i++){
		if (matrix[i][0] == 0) {
			firstColumnIsZero = true
		}
	}


	for (var i = 0; i< matrix[0].length;i++){
		if (matrix[0][i] == 0){
			firstRowZero = true
		}
	}

	for (var i = 1; i< matrix.length;i++){
		for (var j= 1; j< matrix[0].length;j++){
			if (matrix[i][j]==0) {
				matrix[i][0] = 0
				matrix[0][j] = 0
			}
		}
	} 

	for (var i = 1;i<matrix.length;i++){
		if (matrix[i][0] == 0){
			for (var k = 0; k<matrix[0].length;k++){
				matrix[i][k] = 0
			}
		}
	} 

	for (var i = 1; i< matrix[0].length;i++){
		if (matrix[0][i] == 0){
			for (var k = 0; k<matrix.length;k++){
				matrix[k][i] = 0
			}
		}
	}

	if (firstColumnIsZero){
		for (var k = 0; k< matrix.length;k++){matrix[k][0]=0}
	}

    if (firstRowZero){
    	for (var k =0;k<matrix[0].length;k++){matrix[0][k] = 0}
    }
	return matrix
};


console.log(setZeroes([
  [1,1,1],
  [1,0,1],
  [1,1,1]
]))


console.log(setZeroes([
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]))