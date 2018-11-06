/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */

function Interval(start, end) {
      this.start = start;
      this.end = end;
};

var sortFunction=function(a,b){
	return a.start - b.start
};

Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};


Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};

var merge = function(intervals) {
    var begin = new Array()
    var end = new Array()
    
    intervals.sort(sortFunction)
    tmp =intervals.slice(0)
//    console.log(intervals)
    for (var i = 0; i<intervals.length; i++) {
    	begin.push(intervals[i].start)
    	end.push(intervals[i].end)
    }

    i=0
    while( i < begin.length) {
    	if (begin[i+1] <= end[i] ) {
    		var newb = begin[i]
    		begin.remove(i+1)

    		if (end[i] > end[i+1]){
    			var newe = end[i]
    			end.remove(i+1)
    		} else{
    			var newe = end[i+1]
    			end.remove(i)
    		}
 
            //console.log("bfg", intervals)
    		//console.log(i)
    		//console.log(i+1)
            

    		intervals.remove(i)
    		//console.log("i", i, intervals)
    		intervals.remove(i)
    		// console.log("i", i, intervals)
    		// console.log(intervals)
    		// console.log(new Interval(newb, newe))
    		
    		intervals.insert(i, new Interval(newb, newe))
    		
    		console.log(intervals)
    		    		
    	} else {
    		i++
    	}
    }
    //console.log(tmp)
    return intervals
};



//[[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]]
// console.log(merge([new Interval(2,3), new Interval(2,2), new Interval(3,3), new Interval(1,3),
//  new Interval(5,7), new Interval(2,2), new Interval(4,6)]))
