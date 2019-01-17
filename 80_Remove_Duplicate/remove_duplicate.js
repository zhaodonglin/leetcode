
var removeDuplicates = function(nums) {
	var end = 2;
    for (var i = 2; i < nums.length;i++){
    	if (nums[end-2]!= nums[i]){
    		nums[end++]= nums[i];
    	}
    }
    return end;
};

console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]))
console.log(removeDuplicates([1,1,1,2,2,3,3]))