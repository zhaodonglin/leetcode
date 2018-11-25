var maxSubArray = function(nums) {
	var max = nums[0]
	var curPointMax = 0

    for (i=0; i < nums.length; i++) {
    	curPointMax = Math.max(curPointMax + nums[i], nums[i])
    	max = Math.max(curPointMax, max)
    }

    return max
};

console.log(maxSubArray([-1]))
console.log(maxSubArray([1]))
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))