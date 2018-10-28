var searchRange1 = function(nums, target, left, right) {
	var mid =Math.floor((left+right)/2)
    if (target > nums[right]){
    	return [-1,-1]
    }

    if (target < nums[left]){
    	return [-1,-1]
    }

	if (nums[mid] == target) {
		var lbegin = mid
		var rend = mid

		while(lbegin >=0 &&nums[lbegin]== target) {
			lbegin--
		}
		while(rend < nums.length && nums[rend]== target) {
			rend++
		}

		return [lbegin+1, rend-1]
	}

	if (target < nums[mid]){
		right = mid-1
	}

    if (target > nums[mid]){
    	left = mid+1
    }

    return searchRange1(nums, target, left, right)
};



var searchRange = function(nums, target){
	if (nums.length == 0){
		return [-1,-1]
	}
	return searchRange1(nums, target, 0, nums.length-1)
}

// console.log(searchRange([5,7,7,8,8,10], 4))	
// console.log(searchRange([5,7,7,8,8,10], 5))
// console.log(searchRange([5,7,7,8,8,10], 6))
// console.log(searchRange([5,7,7,8,8,10], 7))
// console.log(searchRange([5,7,7,8,8,10], 8))
// console.log(searchRange([5,7,7,8,8,10], 9))
// console.log(searchRange([5,7,7,8,8,10], 10))
// console.log(searchRange([5,7,7,8,8,10], 11))
console.log(searchRange([], 0))