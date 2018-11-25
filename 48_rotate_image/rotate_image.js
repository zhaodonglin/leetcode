

var rotate = function(matrix) {
	var n = matrix.length

    for(var i = 0; i< n;i++){
    	for (var j = i+1; j<n;j++){
    		t = matrix[i][j]
    		matrix[i][j] = matrix[j][i]
    		matrix[j][i] =t
    	}

        
    	for (var k = 0;k <Math.floor(n/2);k++){
    		t = matrix[i][k]
    		matrix[i][k] = matrix[i][n-1-k]
    		matrix[i][n-1-k] = t
    		
    	}
    }
    console.log(matrix)
};


rotate([
  [1,2,3],
  [4,5,6],
  [7,8,9]
])


rotate(
	[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
])