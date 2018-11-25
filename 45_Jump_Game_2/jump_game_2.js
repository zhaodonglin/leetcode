var jump = function(nums) {
    var cur = 0
	var prev = 0

    var i = 0;
    var res = 0
	while(cur < nums.length - 1){
		prev = cur
        
		while(i <= prev) {
			cur = Math.max(cur, i + nums[i])
			i++
		}
		res++
	}

	return res
};

console.log(jump([2,3,1,1,4]))
console.log(jump([5,6,4,4,6,9,4,4,7,4,4,8,2,6,8,1,5,9,6,5,2,7,9,7,9,6,9,4,1,6,8,8,4,4,2,0,3,8,5]))
