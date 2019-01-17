var swap =function(nums, i, j){
	//console.log(i,j)
	t = nums[i]
	nums[i]= nums[j]
	nums[j] = t
	return
};


var sortColors = function(nums) {
	var red = 0;
	var blue = nums.length -1;

    for (var i = 0; i<=blue; i++) {
    	if (nums[i] == 0) swap(nums, i, red++)
    	else if (nums[i] == 2) swap(nums, i--, blue--)
    }

    return nums
};

console.log(sortColors([2,0,2,1,1,0]))
console.log(sortColors([2,0,2,1,1,2]))