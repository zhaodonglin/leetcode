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
}

var combination = function(candidates, num, target, filter, result, all){

	if (target == 0){
		console.log(result)
		all.push(result.slice(0))
		return
	}

	if (num == 0 ){
		return
	}

    for (var i = 0; i < candidates.length; i++) {
    	if (isProcessed(filter, i)) {
    		continue
    	}

    	var maxNum = Math.floor(target/candidates[i])
        filter.push(i)
    	for (var k = 1; k<=maxNum; k++) {
    		for (var j=0;j<k;j++){
    			result.push(candidates[i])
    		}
    		combination(candidates, num-k, target- k* candidates[i], filter, result, all)
    		for (var j= 0; j<k;j++){
    			result.pop()
    		} 
    	}

    	filter.pop()
    }
	return
}

var combinationSum = function(candidates, target) {
    var min = getMinElement(candidates)

    var result = []
	var all = []
    var filter = []

    combination(candidates, Math.floor(target/min), target, filter, result, all)
    return all
};

console.log(combinationSum([2,3,6,7], 7))

