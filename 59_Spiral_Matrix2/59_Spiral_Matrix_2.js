
var go_right = function(matrix, cur_row, begin, end, count){

	for (var i=begin; i<end; i++){
		//console.log("right",cur_row, i)
		matrix[cur_row][i] = count++
		//arr.push(matrix[cur_row][i])
	}
	return matrix
};

var go_down = function(matrix, cur_column, begin, end, count){
	for (var i=begin; i<end; i++){
		matrix[i][cur_column] = count++
		//arr.push(matrix[i][cur_column])
	}
	return matrix
};

var go_up = function(matrix, cur_column, begin, end, count){
	for (var i=begin; i>=end;i--){
		//console.log(i, cur_column)
		//arr.push(matrix[i][cur_column])
		matrix[i][cur_column] = count++
	}
	return matrix
};

var go_left = function(matrix, cur_row, begin, end, count){
	for (var i = begin; i>=end;i--){
		matrix[cur_row][i] = count++
		//arr.push(matrix[cur_row][i])
	}
	return matrix
};


var generateMatrix = function(n) {

	matrix = new Array()
	for (var i = 0; i < n; i++){
	  	var elem = new Array()
	  	for(var j = 0; j < n; j++){
	  		elem.push(0)
	  	}
	  	matrix.push(elem)
	}

	column_boundary = matrix[0].length
	row_boudary = matrix.length


	var right_begin = 0
	var right_end = column_boundary
	
	var down_begin = 0
	var down_end = row_boudary

	var cur_row = 0
	var cur_column = 0

	var left_begin = 0
	var left_end = 0

	var up_begin = 0
	var up_end = 1

    var count = 1

	while(true) {
		if (right_begin >= right_end){
			return arr
		}

		console.log("r",right_begin,right_end)
		arr = go_right(matrix, cur_row, right_begin, right_end, count)
		count += right_end - right_begin
		right_end--
		right_begin++
		
		cur_column = right_end
		down_begin = cur_row+1
		console.log("d", down_begin, down_end)
		if (down_begin>=down_end){
			return arr
		}
    	
    	arr = go_down(matrix, cur_column, down_begin, down_end, count)
    	count += down_end - down_begin
    	down_begin++
    	down_end--

    	cur_row = down_end
    	left_begin = cur_column-1
    	if (left_end > left_begin){
    		return arr
    	}

    	arr = go_left(matrix, cur_row, left_begin, left_end, count)
    	count += left_begin - left_end +1
    	left_end++
    	left_begin--
    	
    	cur_column = left_end-1
    	up_begin = cur_row-1
    	if (up_end>up_begin){
    		return arr
    	}

    	console.log(cur_column, up_begin, up_end)
    	arr = go_up(matrix, cur_column, up_begin, up_end, count)
    	count += up_begin - up_end +1
    	up_begin--
    	up_end++
    	cur_row = up_end-1
	}

};

// /**
//  * @param {number} n
//  * @return {number[][]}
//  */
// var generateMatrix = function(n) {
//   var arr = new Array()
//   var count = 1
//   for (var i = 0; i < n; i++){
//   	var elem = new Array()
//   	for(var j = 0; j < n; j++){
//   		elem.push(count)
//   		count++
//   	}

//   	arr.push(elem)
//   }

//   return arr
// };

console.log(generateMatrix(3))

