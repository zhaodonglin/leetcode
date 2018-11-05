
var getMinElement = function(candidates) {
	var min = candidates[0]
	for (var i =1; i<candidates.length;i++){
		if (min>candidates[i]){
			min = candidates[i]
		}
	}

	return min
};

var isProcessed= function(filter, index){
	for (var i= 0; i< filter.length;i++){
		if (filter[i] == index){
			return true
		}
	}
	return false
};

var combination = function(candidates, target, start, result, all){

    if (target<0){
    	return
    }
	if (target == 0){
		// console.log(result)
		all.push(result.slice(0))
		return
	}
    
    for (var i = start; i < candidates.length; i++) {

    	if ((i > start) && (candidates[i] == candidates[i-1])){
    		console.log(i, start)
    		continue
    	}
    	result.push(candidates[i])
    	combination(candidates, target - candidates[i], i+1, result, all)
    	result.pop()
    }
	return
};

function sortNumber(a,b)
{
	return a - b
}
var combinationSum = function(candidates, target) {
    var result = []
	var all = []
    candidates.sort(sortNumber)
    console.log(candidates)
    combination(candidates, target, 0, result, all)
    return all
};

// console.log(combinationSum([2,3,6,7], 7))
// console.log(combinationSum([2,3,5], 8))
console.log(combinationSum([10,1,2,7,6,1,5], 8))
console.log(combinationSum([2,5,2,1,2], 5))


