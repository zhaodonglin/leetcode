var go_right = function(matrix, cur_row, begin, end, arr){

	for (var i=begin; i<end; i++){
		console.log("right",cur_row, i)
		arr.push(matrix[cur_row][i])
	}
	return arr
};

var go_down = function(matrix, cur_column, begin, end, arr){
	for (var i=begin; i<end; i++){
		arr.push(matrix[i][cur_column])
	}
	return arr
};

var go_up = function(matrix, cur_column, begin, end, arr){
	for (var i=begin; i>=end;i--){
		console.log(i, cur_column)
		arr.push(matrix[i][cur_column])
	}
	return arr
};

var go_left = function(matrix, cur_row, begin, end, arr){
	for (var i = begin; i>=end;i--){
		arr.push(matrix[cur_row][i])
	}
	return arr
};


var spiralOrder = function(matrix) {
	if (0==matrix.length){
        return matrix
    }
	arr = new Array()

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

	while(true) {
		if (right_begin >= right_end){
			return arr
		}
		console.log("r",right_begin,right_end)
		arr = go_right(matrix, cur_row, right_begin, right_end, arr)
		right_end--
		right_begin++
		
		cur_column = right_end
		down_begin = cur_row+1
		console.log("d", down_begin, down_end)
		if (down_begin>=down_end){
			return arr
		}
    	
    	arr = go_down(matrix, cur_column, down_begin, down_end, arr)
    	down_begin++
    	down_end--

    	cur_row = down_end
    	left_begin = cur_column-1
    	if (left_end > left_begin){
    		return arr
    	}

    	arr = go_left(matrix, cur_row, left_begin, left_end, arr)
    	left_end++
    	left_begin--
    	
    	cur_column = left_end-1
    	up_begin = cur_row-1
    	if (up_end>up_begin){
    		return arr
    	}

    	console.log(cur_column, up_begin, up_end)
    	arr = go_up(matrix, cur_column, up_begin, up_end, arr)
    	up_begin--
    	up_end++
    	cur_row = up_end-1
	}

};
// 1,2,3,
// 4,5,6
// 7,8,9

// 1,2,3,4
// 5,6,7,8
// 9,10,11,12

// 1,2,3,4,5
// 6,7,8,9,10
// 11,12,13,14,15
// 16,17,18,19,20
// 21,22,23,24,25
var a = [[1,2,3], [4,5,6], [7,8,9]]
var b =[[1,2,3,4], [5,6,7,8], [9,10,11,12]]
var c = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]
console.log(spiralOrder(a))
console.log(spiralOrder(b))
console.log(spiralOrder(c))