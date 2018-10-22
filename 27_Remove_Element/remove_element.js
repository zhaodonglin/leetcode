/**
 * @param {number[]} nums
 * @return {number}
 */

var removeElement = function(nums, val) {
    var i
	var curPos = 0

	for (i=0; i < nums.length;i++){
		if (nums[i] != val) {
			nums[curPos] = nums[i]
			curPos = curPos + 1
		} 
	}

	return curPos    
};

var nums = [4,2,2,3,3,3]
console.log(removeElement(nums, 4))
console.log(nums)
