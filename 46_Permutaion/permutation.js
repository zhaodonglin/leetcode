var swap=function(nums, a, b){
	var t = nums[a]
	nums[a] = nums[b]
	nums[b] = t
	return
};

var permutation = function(nums, n, res, all){
	if (n == 0) {
		all.push(res.slice(0))

		res = []
		return
    }

    for (var i =0; i < nums.length; i++){
    	swap(nums, 0, i)
    	res.push(nums[0])
    	permutation(nums.slice(1), n-1, res, all)
    	res.pop()
    	swap(nums, 0, i)
    }    

};

var permute = function(nums) {
	var res = [];
	var all = [];
	permutation(nums, nums.length, res, all)
	return all
};

console.log(permute([1,2]))

permute([1,2,3])