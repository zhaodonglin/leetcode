var combineHelper = function(arr, k, n, res, tmp, origin){

	if (k == 0) {
		tmp1 = new Array()
		for (var count = 0; count < tmp.length;count++){
			tmp1.push(tmp[count])
		}
		res.push(tmp1)
		tmp.pop()
		return
	}

	for (var i = 0; i < n; i++) {
		
		tmp.push(arr[i])

		arr2 = new Array()
		for (j = i+1,m = 0; j < n; j++,m++) {
			arr2[m] = arr[j]
		}

		combineHelper(arr2, k-1, n-i-1, res, tmp, origin)
	}

	tmp.pop()
	return
};

var combine = function(n, k) {
	var arr = new Array()

	for (var i= 1; i<=n;i++){
		arr.push(i)
	}

	var tmp = new Array()
    var res = new Array()
	combineHelper(arr, k, n, res, tmp, k)
	return res
};

console.log(combine(5,3))
