function deepcopy(obj) {
    var out = [],i = 0,len = obj.length;
    for (; i < len; i++) {
        if (obj[i] instanceof Array){
            out[i] = deepcopy(obj[i]);
        }
        else out[i] = obj[i];
    }
    return out;
};

var solveNQueens = function(n) {
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

    solveNQueensHelper( Q, 0, n, res)
    return res
};

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

var compress = function(Q, n){
	var res = new Array()

	for (var i = 0; i< n; i++){
		oneline =''
		for(var j = 0; j< n;j++){
			oneline = oneline+Q[i][j]
		}
		res[i] = oneline
	}

	return res
};

var solveNQueensHelper =function(Q, i, n, res){
	if (i >= n){
		var aRes = compress(Q, n)
		res.push(aRes)
         console.log(aRes)
		return
	}
    
	for (var k =0; k< n; k++){
		//console.log("i", "k",i,  k)
		Q[i][k] = 'Q'
		if (isValid(Q, i, k, n)){
			solveNQueensHelper(Q, i+1, n, res)
		}
		Q[i][k] = '.'
	}
	return
};

//solveNQueens(5)