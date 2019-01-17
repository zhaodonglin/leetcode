var grayCode = function(n) {
	var total = new Array();
	var arr = new Array();
    if (n ==0){return [0];}
    for (var i = 0; i < n; i++){
    	arr.push('0');
	}
	total.push(arr.toString());
	helper(arr, n, 0,total);
	res = new Array();
	for (var i = 0;i<total.length;i++){
		var arr = total[i];
		//console.log(total[i][0].concat(total[i][1]).concat(total[i][2]));
        var s ="";
        //console.log(arr, arr.length);
        for (var j= 0;j<n;j++){
        	s = s+arr[j*2];
        }
       

        //console.log(s)
        //s.append(arr[0]).append(arr[1]).append(arr[2])
		res.push(parseInt(s,2))
	}
	return res;
};

var arrExists = function(str, total) {
	for (var i = 0; i < total.length; i++) {
		if (total[i] === str) {
			return true;
		}
	}
	return false;
};

var helper = function(arr, n, index, total){
	for(var index = 0; index < arr.length;index++){
		original_val = arr[index];
		if (arr[index] == '0') {
			arr[index] = '1';
		} else {
			arr[index] = '0';
		}

		var str = arr.toString();
		if (!arrExists(str, total)) {
			total.push(str);
			//console.log(arr)
			return helper(arr, n, index, total);
		} else {
			arr[index] = original_val;
			continue;
		}
	}

	return ;
};

console.log(grayCode(4))