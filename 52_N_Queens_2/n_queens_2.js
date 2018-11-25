var isValid= function(Q, i, j, n){
	var count = 0
	for (var k = 0; k< n; k++){
		if (Q[k][j] =='Q') {count++}
	}

    for (var k = 1; k <n; k++) {
    	if (i -k >=0 && j-k >= 0){
			if (Q[i-k][j-k] == 'Q'){count++}
		}

		if (i+k <n && j+k <n){
			if (Q[i+k][j+k] == 'Q'){count++}
		}

		if (i-k>=0 && j+k<n){
			if (Q[i-k][j+k]== 'Q'){count++}
		}

	    if (i+k<n && j+k <n){
	    	if (Q[i+k][j+k] == 'Q'){count++}
	    }
    }


	if (count > 1){
		return false
	}

	return true
};

var count = 0
var solveNQueensHelper =function(Q, i, n){

	if (i >= n){
		count++
		return
	}
    
	for (var k =0; k< n; k++){
		Q[i][k] = 'Q'
		if (isValid(Q, i, k, n)){
			solveNQueensHelper(Q, i+1, n)
		}
		Q[i][k] = '.'
	}
	return
};

var totalNQueens = function(n) {
    var Q = new Array()
	var res = new Array()
	for (var i = 0; i< n; i++){
		Q[i] = new Array()
	}
	for (var i = 0; i<n;i++){
		for(var j= 0; j<n;j++){
			Q[i][j] = '.'
		}
	}
    var count = 0
    solveNQueensHelper( Q, 0, n)
    return  count 
};

totalNQueens(5)
console.log(count)