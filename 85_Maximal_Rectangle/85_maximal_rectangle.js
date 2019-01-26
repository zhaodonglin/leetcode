var convertMatrix = function(matrix){
	var convertedMatrix = new Array(matrix.length);

	for (var k = 0; k < convertedMatrix.length; k++){
		convertedMatrix[k] = new Array(matrix[0].length);
	}

	for (var i = 0; i < matrix.length; i++){
		var sum = 0;
		for (var j = 0; j < matrix[0].length; j++){
			var val = parseInt(matrix[i][j], 10);
			if (val == 0){
				sum = 0
			} else {
				sum = sum + val;
			}

			convertedMatrix[i][j] = sum;
		}
	}
	return convertedMatrix;
};

var maximalRectangle = function(matrix) {
	var maxVal = 0
	var converted =  convertMatrix(matrix); 
	var heights = new Array(converted.length);
        for (var j = 0; j < converted[0].length;j++){
		for (var k = 0; k< converted.length;k++){
         		heights[k] = converted[k][j]; 	
		}
		maxVal = Math.max(maxVal, largestRectangleArea(heights));
	}
	return maxVal;
};

matrix = [
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
];

var largestRectangleArea = function(heights) {

	var cur_max_val = 0
	var max_val=0
    for (var i=0 ; i<heights.length;i++ ) {
    	if (i+1<heights.length && heights[i]<=heights[i+1]) {
    		continue;
    	}
    	var min = heights[i];
    	for(var j= i; j>=0;j--) {
    		min = Math.min(min, heights[j])
    		
    		cur_max_val = Math.max(cur_max_val, min*(i-j+1))
    	}

    	max_val = Math.max(max_val, cur_max_val)
    }

    return max_val
};

console.log(maximalRectangle(matrix));

