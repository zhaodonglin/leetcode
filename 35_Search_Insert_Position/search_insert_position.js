var searchInsert = function(nums, target) {
  var left =0;
  var right = nums.length -1

  while(1){
//  	console.log(mid,right,left)
  	
  	if (target == nums[right]){
  		return right
  	}
  	if (target == nums[left]){
  		return left
  	}
  	if (target > nums[right]){
  		return right+1;
  	}
  	if (target < nums[left]){
  		return left
  	}

  	if ((right -left == 1) &&(target > nums[left] && target<nums[right])){
  		return right
  	}


  	var mid = Math.floor((left + right)/2);
  	if (nums[mid] == target){
  		return mid;
  	}

  	if (target < nums[mid]){
  		right = mid
  	} else {
  		left = mid
  	}
  }

};


// console.log(searchInsert([1,3,5,6], 5))
// console.log(searchInsert([1,3,5,6], 2))
// console.log(searchInsert([1,3,5,6], 7))
// console.log(searchInsert([1,3,5,6], 0))
// console.log(searchInsert([1,3], 3))
// console.log(searchInsert([1,3],1))
