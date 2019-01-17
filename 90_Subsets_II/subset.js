
var subsetsWithDup = function(nums) {
 	var res = new Array();
 	var total = new Array();
 	var arr2 = nums.sort(sortNumber);
	for (var i = 0; i <= nums.length; i++){
		combine(arr2, 0,  i, res, total);
	}
	return total;
};

function sortNumber(a,b)
{
	return a - b
};

var combine = function(nums, start, number, res, total) {
	//console.log(number,res)
	if (number == res.length) {
		total.push(res.slice(0))
		return 
	}

	for (var i = start; i< nums.length; i++) {
		res.push(nums[i])
		combine(nums, i+1, number, res, total)
		res.pop(nums[i])

		while (i<nums.length && nums[i]== nums[i+1]){
			i = i + 1
		}
	}
};

console.log(subsetsWithDup([4,4,4,1,4]))