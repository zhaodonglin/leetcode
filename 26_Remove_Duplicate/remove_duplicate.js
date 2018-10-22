/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	var i
	var curPos = 0
	for (i=0; i < nums.length;){

		for (;i < nums.length -1 && nums[i] == nums[i+1];) {
			i = i + 1
		}
		nums[curPos] = nums[i] 
		curPos = curPos +1
		i = i+1
	}
	return curPos
};

var nums = [1,2,2,3,3,3]

console.log(removeDuplicates(nums))
console.log(nums)
