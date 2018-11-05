var firstMissingPositive = function(nums) {
	var mx =0;
    var set = new Set()

    for (var i = 0; i<nums.length;i++){
  		if (nums[i] < 0) {
  			continue;
  		}
  		if (nums[i]>mx){
  			mx = nums[i]
  		}
    	set.add(nums[i])
    }

   for (var i= 1; i<=mx; i++){
   		if (!set.has(i)){
   			return i
   		}
   }
   return mx+1
};

console.log(firstMissingPositive([1, 2, 0]))
console.log(firstMissingPositive([1, 2, 3, 4, 5]))
console.log(firstMissingPositive([3,4,-1,1]))
console.log(firstMissingPositive([7,8,9,11,12]))
