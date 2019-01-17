
var helper = function(arr, res, total){

	if (arr.length == 0){
		//total.push(res.slice(0));
		return total+1;
	}

	//console.log(arr)
	var val = parseInt(arr[0],10);
	if (val >=1 && val<=26){
		res.push(String.fromCharCode(64+val));
		total = helper(arr.slice(1), res, total);
		res.pop();
	}

	if (arr.length > 1 && ((parseInt(arr[0],10) == 2 && parseInt(arr[1],10) <= 6) || (parseInt(arr[0],10)==1))) {
		var val = parseInt(arr[0].concat(arr[1]),10)
		if (val >=1 && val <=26) {
			res.push(String.fromCharCode(64+val));
			total = helper(arr.slice(2), res, total);
			res.pop();
		}
	}
	return total;
};

var numDecodings = function(s) {
	var num = 97;
	var arr = s.split("");
	var res = new Array();
	var total = 0;
	return helper(arr, res, total)
	//return total.length;
};

 console.log(numDecodings("17"))
 //console.log(numDecodings("9371597631128776948387197132267188677"))
console.log(numDecodings("9371597631128776948387197132267188677349946742344217846154932859125134924241649584251978418763151253"))
 console.log(numDecodings("01"))