var countAndSay = function(n) {
	var begin = [1]
	var i = 1
	while(i<n){
		var j = 0
		var new_arr=[]
		while(j < begin.length) {
			var number = begin[j]
			var k = j
			var count = 0

			while (begin[k] == number) {
				k = k+1
				count++
				j = j+1
			}

			new_arr.push(count)
			new_arr.push(number)
		}
        
		begin = new_arr	
        j=0
        i++	
	}

	return begin.join("")
};

console.log("last", countAndSay(3))
console.log("last", countAndSay(10))

