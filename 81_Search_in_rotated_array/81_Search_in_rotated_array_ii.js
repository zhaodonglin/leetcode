var searchFunction = function(nums, target, left, right){
	var mid = Math.floor((left+right)/2)
	console.log(mid);
    if (right < 0){
    	return -1
    }
    if (left>right){
    	return -1
    }

    	if (nums[mid] == target) {
		return true
	}

    if (nums[left] == target){
    	return true
    }

    if (nums[right] == target){
    	return true
    }
    
    if (nums[mid] < nums[right]) {
    	if ((target>nums[mid]) && (target< nums[right])){
    		left = mid + 1
    	} else{
    		right = mid - 1
    	}
	} else if (nums[mid]> nums[right]){
		if ((target < nums[mid])&&( target > nums[left])){
			right = mid - 1
		} else{
			left = mid +1
		}
	}else{
		right = right -1;
	}
    
    return searchFunction(nums, target, left, right)
};


var search = function(nums, target) {
	if (nums.length== 0){
		return -1
	}
	return searchFunction(nums, target, 0, nums.length-1)    
};

console.log(search([1,3,1,1,1],3))

//console.log(search([2,5,6,0,0,1,2], 3))

