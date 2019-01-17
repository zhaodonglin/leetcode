var helper = function(matrix, begin, end, target){

	mid = Math.floor((begin+end)/2)
	//console.log("mid",mid)
	mid_i = Math.floor(mid/matrix[0].length)
	mid_j = mid%matrix[0].length


	//console.log('mid_pos', mid_i, mid_j)
	if (end == begin +1){
		i = Math.floor(end/matrix[0].length)
		j = end%matrix[0].length

		if (matrix[i][j]== target){
			return true
		}

		i = Math.floor(begin/matrix[0].length)
		j = begin%matrix[0].length

		if (matrix[i][j]== target){
			return true
		}

		return false
	}

	//console.log('muid', mid_i, mid_j)
	if (matrix[mid_i][mid_j] == target){
		return true
	}
	else if (matrix[mid_i][mid_j] > target){
		end = mid-1
	} else {
		begin = mid+1
	}

	//console.log(begin,end)
	if (begin>end){
		return false
	}
	// if (begin == end){
	// 	if(matrix[begin])
	// }

	return helper(matrix, begin, end, target)
};

var helper2 = function(matrix, begin, end, target){

	mid = Math.floor((begin+end)/2)
	//console.log("mid",mid)
	//mid_i = Math.floor(mid/matrix[0].length)
	//mid_j = mid%matrix[0].length


	//console.log('mid_pos', mid_i, mid_j)
	if (end == begin +1){
		//i = Math.floor(end/matrix[0].length)
		//j = end%matrix[0].length

		if (matrix[begin]== target){
			return true
		}

		//i = Math.floor(begin/matrix[0].length)
		//j = begin%matrix[0].length

		if (matrix[end]== target){
			return true
		}

		return false
	}

	//console.log('muid', mid_i, mid_j)
	if (matrix[mid] == target){
		return true
	}
	else if (matrix[mid] > target){
		end = mid-1
	} else {
		begin = mid+1
	}

	//console.log(begin,end)
	if (begin>end){
		return false
	}
	// if (begin == end){
	// 	if(matrix[begin])
	// }

	return helper2(matrix, begin, end, target)
};


var searchMatrix = function(matrix, target) {
	//console.log(matrix[0].length)
	if (matrix.length  == 0){
		return false
	}
	if (matrix[0].length == undefined || matrix[0].length==0) {
		return helper2(matrix, 0, matrix.length-1, target)
	}
    return helper(matrix,0, matrix.length * matrix[0].length-1, target)
};

// console.log(searchMatrix([
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ],3))


// console.log(searchMatrix([
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ],1))


// console.log(searchMatrix([
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ],50))

// console.log(searchMatrix([
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ],16))


// console.log(searchMatrix([
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ],13))
// console.log(searchMatrix([1],1))
// console.log(searchMatrix([],1))
console.log(searchMatrix([[]],1))