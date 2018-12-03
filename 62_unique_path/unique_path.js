var helper =function(i, j, count, m, n){

	if ((i == m) && (j == n)){
		return count+1
	}
	if (i>m){
		return count
	}
	if (j>n){
		return count
	}

	if (i+1<=m){
		count = helper(i+1, j, count, m, n)
	}

	if (j+1<=n){
		count = helper(i,j+1, count,m,n)
	}

	return count
};

var dynamic= function(m,n){
	var a = new Array(m)
	for (var i = 0; i < m; i++){
		b = new Array(n)
		for (var j = 0; j < n; j++){
			b[j] = 0
		}
		a[i] = b
	}

	for (var i = 0;i<m;i++){
		a[i][0]=1
	}

	for (var j = 0;j<n;j++){
		a[0][j]=1
	}

	for (var i = 1; i<m;i++){
		for (var j=1; j<n;j++){
			a[i][j] = a[i-1][j]+a[i][j-1]
		}
	}

	return a[m-1][n-1]
};

var uniquePaths = function(m, n) {
	return dynamic(m,n)  
};

var uniquePathsWithObstacles = function(obstacleGrid) {
    
};

console.log(uniquePaths(3,2))
console.log(uniquePaths(51,9))
console.log(uniquePaths(7,3))