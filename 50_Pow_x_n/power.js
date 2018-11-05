var myPow = function(x, n) {
    
    if (n ==0){
    	return 1
    }

    if (n<0){
    	return 1.0/myPow(x, -n)
    }

	if (n==1) {
		return x
	}
    if (n%2 == 0){
    	t=myPow(x, n/2)
    	return  t* t
    } 
    console.log(x, n)
    return x*myPow(x,n-1)
};

// console.log(myPow(2,0))
console.log(myPow(0.00001,2147483647))