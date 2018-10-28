var searchFunction = function(nums, target, left, right){
	var mid = Math.floor((left+right)/2)
    console.log(nums, target, left, right)

	if (nums[mid] == target) {
		return mid
	}

    if (target > nums[mid]) {
    	if (((mid+1) < nums.length) && (nums[mid] > nums[mid+1])){
    		return -1
    	} else {
    		left = mid+1 
    	}
	}

	if (target < nums[mid] ){
		if (((mid-1)>=0) && (nums[mid] < nums[mid-1])){
			return -1
		}else{
			right = mid-1
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


search([4,5,6,7,0,1,2], 0)

