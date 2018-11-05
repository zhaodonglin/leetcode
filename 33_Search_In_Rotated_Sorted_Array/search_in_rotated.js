var searchFunction = function(nums, target, left, right){
	var mid = Math.floor((left+right)/2)

    if (right < 0){
    	return -1
    }
    if (left>right){
    	return -1
    }

    

	if (nums[mid] == target) {
		return mid
	}

    if (nums[left] == target){
    	return left
    }

    if (nums[right] == target){
    	return right
    }
    
    if (nums[mid] < nums[right]) {
    	if ((target>nums[mid]) && (target< nums[right])){
    		left = mid + 1
    	} else{
    		right = mid - 1
    	}
	} else {
		if ((target < nums[mid])&&( target > nums[left])){
			right = mid - 1
		} else{
			left = mid +1
		}
	}
    
    return searchFunction(nums, target, left, right)
};


var search = function(nums, target) {
	if (nums.length== 0){
		return -1
	}
	return searchFunction(nums, target, 0, nums.length-1)    
};

console.log(search([4,5,6,7,0,1,2], -1))
console.log(search([4,5,6,7,0,1,2], 4))
console.log(search([4,5,6,7,0,1,2], 5))
console.log(search([4,5,6,7,0,1,2], 6))
console.log(search([4,5,6,7,0,1,2], 7))
console.log(search([4,5,6,7,0,1,2], 0))
console.log(search([4,5,6,7,0,1,2], 1))
console.log(search([4,5,6,7,0,1,2], 2))
console.log(search([4,5,6,7,0,1,2], 8))
console.log(search([1,3], 1))
console.log(search([1,3], 3))
console.log(search([1,3], -1))
console.log(search([1,3], 4))
console.log(search([], -1))
console.log(search([1], 4))
console.log(search([1], 1))


