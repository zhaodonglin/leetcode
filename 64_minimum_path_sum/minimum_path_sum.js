
var minPathSum = function(grid) {
	var arr = new Array(grid.length)
	//console.log(grid.length, grid[0].length)
	if (grid[0].length === undefined){

		for (i=0; i< grid.length;i++){
			if (i == 0) {
	    		arr[i] = grid[0]
	    	}else{
	    		arr[i]= arr[i-1]+grid[i]
	    	}
		}
		return arr[grid.length-1]
	}
	for (var i = 0; i < grid.length; i++) {
		arr[i] = new Array(grid[0].length)
	}


    for (var i = 0; i < grid.length; i++){
    	if (i== 0) {

    		arr[i][0] = grid[i][0]
    	}else{
    		arr[i][0] = arr[i-1][0]+grid[i][0]
    	}
    //	console.log('grid',grid[i][0], arr[i][0])
    }

    for (var j = 0; j< grid[0].length; j++){
    	if (j== 0) {
    		arr[0][j] = grid[0][j]
    	}else{
    		arr[0][j] = arr[0][j-1]+grid[0][j]
    	}
    //	console.log('arr', arr[0][j])
    }


    for (var i = 1;i < grid.length; i++){
    	for (var j = 1; j < grid[0].length; j++){
    		arr[i][j] = arr[i-1][j]+ grid[i][j] < arr[i][j-1]+ grid[i][j]? arr[i-1][j]+ grid[i][j] : arr[i][j-1]+ grid[i][j] 
    	}
    }

    // console.log(grid.length, grid[0].length)
    // console.log('arr',arr)
    
    return arr[grid.length-1][grid[0].length-1]
};

console.log(minPathSum([
  [1,3,1],
  [1,5,1],
  [4,2,1]
]))

console.log(minPathSum([1]))
console.log(minPathSum([1,1]))
console.log(minPathSum([[1],[1]]))


console.log(minPathSum([[1,2,5],[3,2,1]]))





