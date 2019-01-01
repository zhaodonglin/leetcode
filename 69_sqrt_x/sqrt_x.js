
var mySqrt = function(x) {
    var qt = x
    var low  = 0
    var up = x

    mid = (low+up)/2
    do{
    	if (mid*mid>x){
    		up = mid
    	} else{
    		low = mid
    	}
    	last = mid
    	mid = (up+low)/2
    }while(Math.abs(mid-last)>0.00000001)
    
    var y= Math.ceil(mid)
    if (y*y == x){
    	return y
    }

    var z= Math.floor(mid)
    if (z*z == x){
    	return z
    }

    return Math.floor(mid)
};


console.log(mySqrt(1))
console.log(mySqrt(8))
console.log(mySqrt(9))
console.log(mySqrt(15))