var helper = function(s, res, num, total){
	
	if (s.length== 0 && num == 4){
		total.push(res.slice(0));
		return;
	}
	
        if (num == 4 && s.length >0){
		return;
	}

	if (s.length == 0 && num<4){
        	return;
	}

	if (s.length >=1){
		res.push(s.slice(0,1));
		helper(s.slice(1), res, num+1, total);
		res.pop();
	}

	if (s.length >=2&&s[0]!='0'){
	       res.push(s.slice(0,2));	
	       helper(s.slice(2), res, num+1, total);
	       res.pop();
        }

	if (s.length >=3 && parseInt(s.slice(0,3),10)<=255&&s[0]!= '0'){
		res.push(s.slice(0,3));
		helper(s.slice(3), res, num+1, total);
		res.pop();
        }
	return;
}

var restoreIpAddresses = function(s) {
	arr = s.split("");
	res = new Array();
	total = new Array();

	helper(s, res, 0, total);
	
	total_res = new Array();
	for (var i = 0; i < total.length; i++){
		total_res.push(total[i].join("."))
	}
	return total_res;
};

console.log(restoreIpAddresses("25525511135"));
console.log(restoreIpAddresses("010010"))
