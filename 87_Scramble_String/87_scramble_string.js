var helper= function(s1,s2){
        if (s1.length != s2.length) {return false;}
        if (s1 == s2) {return true;}
	
	var a1 = s1.split("");
	var a2 = s2.split("");
	          
	var b1 = a1.sort();
	var b2 = a2.sort();
	if (b1.toString() != b2.toString()){return false;}
	for (var i =1; i<s1.length;i++){
		var s11 = s1.slice(0,i);
                var s12 = s1.slice(i);
		
                var s21 = s2.slice(0,i);
		var s22 = s2.slice(i);
		if (helper(s11, s21) && helper(s12,s22)) {return true;}
                s22 = s2.slice(s2.length-i);
		s21 = s2.slice(0, s2.length-i);
                if (helper(s11,s22) && helper(s12,s21)) {return true;}
	}
	return false;
}


var isScramble = function(s1, s2) {
	return helper(s1, s2);
};

console.log(isScramble("great", "rgeat"));
console.log(isScramble("abcde", "caebd"));


