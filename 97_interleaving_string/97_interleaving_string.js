

var isInterleaveHelper = function(s1, s2, s3) {
	dp = new Array(s1.length+1);

	for(var i = 0;i<=s1.length;i++){
		dp[i] = new Array(s2.length+1);
	} 

	for (var i = 0; i <= s1.length; i++){
		for (var j = 0; j < s2.length;j++){
			dp[i][j] = false;
		}
	}   

	dp[0][0] = true;
	for (var i = 1;i <= s1.length; i++){
		if (s1[i-1]==s3[i-1] && dp[i-1][0]){dp[i][0] = true;}
		else {dp[i][0] = false;}
	}
	
	for(var i = 1; i <= s2.length; i++){
		if (s2[i-1]==s3[i-1] && dp[0][i-1]) {dp[0][i] = true;}
		else {dp[0][i] = false;}
	}
       
        for(var i =1 ; i<=s1.length; i++){
		for (var j = 1; j <=s2.length;j++){
			dp[i][j] = (dp[i][j-1] && s3[i+j-1] == s2[j-1])
				    || (dp[i-1][j] && s3[i-1+j]== s1[i-1])
		}
	}
	console.log(dp)	
	return dp[s1.length][s2.length]
};

var isInterleave = function(s1,s2,s3){
	if (s1.length + s2.length != s3.length){
		return false;
	}

	if (s1.length == 0 && s2.length == 0){
		return true;
	}

	a1 = s1.split("")
	a2 = s2.split("")
	a3 = s3.split("")
	
	return isInterleaveHelper(a1,a2,a3);
}

console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac"));
console.log(isInterleave("aabcc", "dbbca", "aadbbbaccc"));
console.log(isInterleave("db", "b", "cbb"));
