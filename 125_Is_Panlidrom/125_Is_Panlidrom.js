var isAlpha = function(s){
	var a = s.charCodeAt();
	return (a >= 65 && a <= 90) || (a>=97 && a<=122) || (a>=48 && a<=57); 
};

var isPalindrome = function(s) {
	s = s.toUpperCase();
	var new_str = new Array();
	for (var i = 0; i < s.length; i++){
		if (isAlpha(s[i])){
			new_str.push(s[i]);
		}
	}
	
	if (new_str.length == 0){
		return true;
	}
	console.log(new_str);
	var begin = 0;
	var end = new_str.length - 1;
	while(begin<end){
		if (new_str[begin].charCodeAt() != new_str[end].charCodeAt()){
			console.log(begin,end,s[begin],s[end]);
			return false;
		}
		begin++;
		end--;
        }
	return true;	
};
console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome("0P"))
