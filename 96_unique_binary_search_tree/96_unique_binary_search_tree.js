
var numTrees = function(n) {
	var sum = 0;
	if (n==0) {
		return 1;
	}
	if (n=1){
		return 1;
	}
	for(var i = 0; i<n;i++) {
		sum += numTrees(i) * numTrees(n-i-1);
	}  
        console.log(sum)
	return sum; 
};

console.log(numTrees(3))
