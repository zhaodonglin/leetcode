var largestRectangleArea = function(heights) {

	var cur_max_val = 0
	var max_val=0
    for (var i=0 ; i<heights.length;i++ ) {
    	if (i+1<heights.length && heights[i]<=heights[i+1]) {
    		continue;
    	}
    	var min = heights[i];
    	for(var j= i; j>=0;j--) {
    		min = Math.min(min, heights[j])
    		
    		cur_max_val = Math.max(cur_max_val, min*(i-j+1))
    	}

    	max_val = Math.max(max_val, cur_max_val)
    }

    return max_val
};
console.log(largestRectangleArea([2,1,5,6,2,3]))