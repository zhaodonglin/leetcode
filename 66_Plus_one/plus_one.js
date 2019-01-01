var plusOne = function(digits) {
	var carry = 1

	for (var i = digits.length - 1 ; i>=0; i--){
		digits[i] = digits[i]+carry
		carry = Math.floor(digits[i]/10)
		digits[i] = Math.floor(digits[i]%10)
		//console.log(i)
	}    

	if (carry == 1) {
		var new_digits = new Array(digits.length +1)
		new_digits[0] = 1
		for (var i=0;i<=digits.length-1;i++){
			new_digits[i+1] = digits[i]
		}
		return new_digits
	} else {
		return digits
	}
};

console.log(plusOne([1,2,3]))
console.log(plusOne([1,2,9]))
console.log(plusOne([9]))