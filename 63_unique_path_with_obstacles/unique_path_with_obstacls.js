
var dynamic= function(m,n,a){
	if (a[0][0] ==1){
		return 0
	}
	var dp = new Array(m)
	for (var i = 0; i < m; i++){
		b = new Array(n)
		for (var j = 0; j < n; j++){
			b[j] = 0
		}
		dp[i] = b
	}

	dp[0][0]=1
    
	for (var i = 0; i<m;i++){
		for (var j = 0; j<n;j++) {
			//console.log(i,j,m,n)
			if (a[i][j]== 1) { dp[i][j]=0 }
			else if (i == 0 && j>=1){dp[i][j] = dp[i][j-1]}
			else if (j == 0 && i>=1){dp[i][j]=dp[i-1][j]}
		    else if (i>=1 && j>=1){dp[i][j] = dp[i-1][j]+dp[i][j-1]} 
		}
	}
	return dp[m-1][n-1]
};

// [0, 0]
// [1,1]
// [0,0]

var uniquePathsWithObstacles = function(obstacleGrid) {
   var m = obstacleGrid.length
//   console.log(typeof(obstacleGrid[0]))
   // if ()
   var n =0
   if (typeof(obstacleGrid[0]) === typeof(new Array())){
   		var n = obstacleGrid[0].length
   }
   
   //console.log('m', m,'n', n)

   if ((m==1)&&(n==1)){
	   	if (obstacleGrid[0][0]==0){
	   		return 1
	   	}else{
	   		return 0
	   	}
   }

   if (n ==0){
   		for(var i = 0;i<m;i++){
   			if (obstacleGrid[i]==1){
   				return 0
   			}
   		}
   		return 1	
   }

  // console.log("m", m, "n", n)
   return dynamic(m,n,obstacleGrid)
};

var grid = function(m,n){
	 var a = new Array(m)
	for (var i = 0; i < m; i++){
		b = new Array(n)
		for (var j = 0; j < n; j++){
			b[j] = 0
		}
		a[i] = b
	}

	a[1][1]=1
	return a
}



console.log(uniquePathsWithObstacles([[0,0],[1,1], [0,0]]))
console.log(uniquePathsWithObstacles([[0]]))
console.log(uniquePathsWithObstacles([[1,0]]))
console.log(uniquePathsWithObstacles([[1],[0]]))
console.log(uniquePathsWithObstacles([[0],[1]]))
console.log(uniquePathsWithObstacles([0]))
console.log(uniquePathsWithObstacles([1]))
console.log(uniquePathsWithObstacles([1,0]))
console.log(uniquePathsWithObstacles([0,0,1]))
console.log(uniquePathsWithObstacles([0,0,0]))
console.log(uniquePathsWithObstacles([[0,0],[0,1]]))
console.log(uniquePathsWithObstacles(grid(3,3)))
console.log(uniquePathsWithObstacles([[0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0],
	[1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1],
	[0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0],
	[0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0],
	[1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0],[0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0],[0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0],[0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0],[0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1],[1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1],[0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1],[1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1],[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0]]))
