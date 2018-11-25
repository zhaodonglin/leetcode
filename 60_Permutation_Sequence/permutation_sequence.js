var factor = function(n){
	if (n==0){
		return 1
	}
	return n * factor(n-1)
};

function sortNumber(a,b)
{
return a - b
}

var getPermutationHelper= function(n, k, arr, begin) {
	if ((n < 1 ) || (k < 1)) {
		//console.log(arr, n, k)
		return arr
	}
 	
    var seq = Math.floor(k / factor(n - 1))
    var mod = Math.floor(k % factor(n - 1))

    //console.log(arr, seq, mod, begin)
	var t = arr[seq+begin]
    arr[seq+begin] = arr[begin]
    arr[begin] = t

    var new_arr = new Array(arr.length-begin-1)
    for (var i= 0; i< new_arr.length;i++){
    	new_arr[i] = arr[begin+1+i]
    }
    new_arr.sort(sortNumber)
    
    //console.log("new",new_arr)
    for (var i = begin +1; i<= arr.length -1;i++) {
    	arr[i] = new_arr[i-begin-1]
    }

    return getPermutationHelper(n-1, mod, arr, begin + 1)
};

var getPermutation = function(n, k) {
	var arr =　new Array() 

    for (var i = 1; i <= n; i++){
    	arr.push(i)
    }

    var arr1 = getPermutationHelper(n, k-1, arr, 0)
    //str.replace(/\s+/g,"")
    return arr1.toString().replace(/,+/g,"")
};

console.log(getPermutation(3,5))
console.log(getPermutation(4,9))