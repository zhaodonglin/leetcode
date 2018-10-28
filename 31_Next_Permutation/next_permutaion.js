
var swap= function(nums, i, j){
	t = nums[i]
	nums[i] = nums[j]
	nums[j] = t
}

var nextPermutation = function(nums) {
    for (var i= nums.length-1; i>0; i--){
    	if (nums[i-1]<nums[i]){
    		swap(nums, i, i-1)
    		return
    	}
    }

    nums = nums.sort()
    return 
};


nums = [1,2,3]
nextPermutation(nums)

console.log(nums)

nums = [3,2,1]
nextPermutation(nums)
console.log(nums)


nums = [1,1,5]
nextPermutation(nums)
console.log(nums)