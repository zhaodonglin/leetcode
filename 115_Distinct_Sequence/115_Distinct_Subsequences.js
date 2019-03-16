

var numDistinct = function(s, t) {
	var dp = new Array(t.length+1)
	for(var i =0;i < dp.length;i++){
		dp[i] = new Array(s.length + 1);
	}
	
	var s1 = s.split("");
	var t1 = t.split("");
	
	for (var i=0; i< dp.length;i++){
		dp[i][0] = 0;
	}
	
        for (var i=0; i <dp[0].length;i++){
		dp[0][i] = 1;
	}

	for (var i = 1;i<=t1.length;i++){
		for (var j = 1; j <= s1.length;j++){
			dp[i][j] = dp[i][j-1] + (t1[i-1]==s1[j-1]? dp[i-1][j-1]:0);
		}
	}
	console.log(dp);
	return dp[t1.length][s1.length]; 
};	

console.log(numDistinct("rabbbit", "rabbit"));


