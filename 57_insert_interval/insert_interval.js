// Definition for an interval.
 function Interval(start, end) {
      this.start = start;
      this.end = end;
 }
 
function insertToArray(newInterval,i, intervals){
	var newIntervals = new Array()
	for (var k=0; k<i;k++){
		newIntervals.push(intervals[k]) 
	}
	newIntervals.push(newInterval)
	for (var k=i; k< intervals.length;k++){
		newIntervals.push(intervals[k])
	}
	return newIntervals
};

function merge(newInterval, i, intervals){
	var newIntervals = new Array()
	start = intervals[i].start
	new_end = Math.max(intervals[i].end,newInterval.end)
	for (var k = i; k<intervals.length && intervals[k].start <= new_end; k++){
		new_end = Math.max(intervals[k].end, new_end)
	}
	
	for(var j = 0; j<i;j++){
		newIntervals.push(intervals[j])
	}
	newIntervals.push(new Interval(start,new_end))
	for (var j= k;j<intervals.length;j++){
		//console.log(k,i,j,new_end)
		newIntervals.push(intervals[j])
	}
	return newIntervals
};

function merge2(newInterval, i, intervals){
	//var newIntervals = new Array()
	//start = intervals[i].start
	new_start = Math.min(intervals[i].start,newInterval.start)
	//new_end = Math.max(intervals)
	intervals[i].start = new_start
	return intervals
};

function merge3(newInterval, i, intervals){
	var newIntervals = new Array()
	start = Math.min(intervals[i].start, newInterval.start)
	new_end = Math.max(intervals[i].end,newInterval.end)
	for (var k = i; k<intervals.length && intervals[k].start <= new_end; k++){
		new_end = Math.max(intervals[k].end, new_end)
	}
	console.log(start, new_end, k)
	for(var j = 0; j<i;j++){
		newIntervals.push(intervals[j])
	}
	newIntervals.push(new Interval(start,new_end))
	for (var j= k;j<intervals.length;j++){
		//console.log(k,i,j,new_end)
		newIntervals.push(intervals[j])
	}
	return newIntervals
};

/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
  
  for (var i = 0; i< intervals.length;i++) {
	  	//insert element to the middle of the arrary
	  	if (newInterval.start < intervals[i].end) { 
		  	if (newInterval.end > intervals[i].end){
		  		console.log("he",i)
		  		return merge3(newInterval, i, intervals)

		  		// console.log("hee",i)
		  		// if (i+1<intervals.length){
		  		// 	if (newInterval.end < intervals[i+1].start){
		  		// 		console.log("ha")
		  		// 		return insertToArray(newInterval, i, intervals)
		  		// 	} //need merge
		  		// 	else{
		  		// 		return merge(newInterval,i,intervals)
		  		// 	}
		  		// 	//add to tail
		  		// } else {
		  		// 	intervals.push(newInterval)
		  		// 	return intervals
		  		// }


	  		} else if (newInterval.end === intervals[i].end){

	  			return merge2(newInterval, i, intervals)

	  		} else {
	  			//newInterval.start < intervals[i].end && newInterval.end < intervals[i].end
	  			if (newInterval.end == intervals[i].start) {
	  				//console.log("enter that")

	  					//console.log("here")
	  					return merge2(newInterval, i, intervals)
	  				
	  			} else if (newInterval.end < intervals[i].start){

	  				if (i == 0){
	  					intervals.unshift(newInterval)
	  					return intervals
	  				} else {
	  					//console.log("enter this")
	  					return insertToArray(newInterval, i, intervals)
	  				}
	  			} else {
	  				//newInteval.start < intervals[i].end && newInterval.end > intervals[i].start
	  				//intervals[i].start = Math.min()
	  				return merge2(newInterval, i, intervals)
	  			}
	  			
	  		}
	  		//needs merge
	  	} else if (newInterval.start === intervals[i].end) {
	  		return merge(newInterval,i, intervals)
	  	}  
  }
  //console.log(newInterval, i)
  if (i === intervals.length){

  	intervals.push(newInterval)

  	return intervals
  }

};

//console.log(new Interval(9,10))
// console.log(insert([new Interval(1,5)], (new Interval(0,1))))
// console.log(insert([new Interval(1,2), new Interval(4,5)], new Interval(2,3)))
// console.log(insert([new Interval(1,2), new Interval(4,5)], new Interval(3,4)))
// console.log(insert([new Interval(1,2), new Interval(5,6)], new Interval(3,4)))
// console.log(insert([new Interval(1,3), new Interval(6,9)], new Interval(2,5)))
// console.log(insert([new Interval(1,2), new Interval(3,5)], new Interval(2,3)))

// console.log(insert([new Interval(1,2), new Interval(3,5)], new Interval(9,10)))
// console.log(insert([new Interval(1,2), new Interval(3,5)], new Interval(-1,-3)))
// console.log(insert([new Interval(1,2), new Interval(3,5), new Interval(6,7), new Interval(8,10), new Interval(12,16)], new Interval(4,8)))


