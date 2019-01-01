var climbStairs = function(n) {
	if (n == 1){
		return 1
	}    
	if (n == 2){
		return 2
	}

	var a = 1
	var b =2 
	for (var i = 3; i<=n;i++){
		var c = a+b
		a = b
		b = c
	}
	return c
};

console.log(climbStairs(3))
console.log(climbStairs(4))
