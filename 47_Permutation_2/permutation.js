
var swap=function(nums, a, b){
	var t = nums[a]
	nums[a] = nums[b]
	nums[b] = t
	return
};

var isvisited= function(nums, val, index){
	for (var i= 0; i<index; i++){
		if (nums[i] == val){
			return true
		}
	}
	return false
};
var permutation = function(nums, n, res, all){
	if (n == 0) {
		all.push(res.slice(0))

		res = []
		return
    }

    for (var i =0; i < nums.length; i++){
    	if (i>0 && isvisited(nums, nums[i], i)){
    		continue;
    	}

    	swap(nums, 0, i)
    	res.push(nums[0])
    	permutation(nums.slice(1), n-1, res, all)
    	res.pop()
    	swap(nums, 0, i)
    }    

};

function sortNumber(a,b)
{
	return a - b
};

var permuteUnique = function(nums) {
	var res = [];
	var all = [];
	nums.sort(sortNumber)
	permutation(nums, nums.length, res, all)
	return all
};


console.log(permuteUnique([1,1,1,2,3]))
console.log(permuteUnique([1,1,2,2]))

//[[0,0,0,1,9],[0,0,0,9,1],[0,0,1,0,9],[0,0,1,9,0],[0,0,9,1,0],[0,0,9,0,1],[0,1,0,0,9],[0,1,0,9,0],[0,1,9,0,0],[0,9,0,1,0],[0,9,0,0,1],[0,9,1,0,0],[0,9,0,1,0],[0,9,0,0,1],[1,0,0,0,9],[1,0,0,9,0],[1,0,9,0,0],[1,9,0,0,0],[9,0,0,1,0],[9,0,0,0,1],[9,0,1,0,0],[9,0,0,1,0],[9,0,0,0,1],[9,1,0,0,0],[9,0,0,1,0],[9,0,0,0,1],[9,0,1,0,0],[9,0,0,1,0],[9,0,0,0,1]]

//[[0,0,0,1,9],[0,0,0,9,1],[0,0,1,0,9],[0,0,1,9,0],[0,0,9,0,1],[0,0,9,1,0],[0,1,0,0,9],[0,1,0,9,0],[0,1,9,0,0],[0,9,0,0,1],[0,9,0,1,0],[0,9,1,0,0],[1,0,0,0,9],[1,0,0,9,0],[1,0,9,0,0],[1,9,0,0,0],[9,0,0,0,1],[9,0,0,1,0],[9,0,1,0,0],[9,1,0,0,0]]