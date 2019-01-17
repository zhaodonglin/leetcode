
//    0  a  b  c
// 0  0  1  1  1
// b  1  1  1  1
// c  1  1  1  1


var minDistanceHelper = function(word1, word2) {	
	arr = new Array(word1.length+1)
	for (var i= 0; i< arr.length; i++){
		arr[i]  = new Array(word2.length+1)
	}

	arr[0][0] = 0
	for (var i = 1; i< arr.length;i++){arr[i][0] = i}
	for (var i= 1;i < arr[0].length;i++){arr[0][i] = i}

    for (var i = 1; i<word1.length+1;i++) {
    	for (var j = 1; j<word2.length+1;j++){
    		//console.log(i, j, word1[i-1], word2[j-1])
    		if (word1[i-1] === word2[j-1]){
    			arr[i][j] = arr[i-1][j-1]
    		} else {
    			arr[i][j] = Math.min(arr[i][j-1], arr[i-1][j]) +1
    		}
    	}
    }

    console.log(arr)
    return arr[word1.length][word2.length]
};

var minDistance = function(word1, word2) {
	arr1 = word1.split("")
	arr2 = word2.split("")
	return minDistanceHelper(arr1, arr2)
};

// console.log(minDistance('bc', 'abc'))
// console.log(minDistance('abc', 'bc'))
// console.log(minDistance('ros', 'horse'))
// console.log(minDistance("inten", "execu"))
//console.log(minDistance("logicoarchae", "ge"))
console.log(minDistance("zooge", "zoologicoarchae"))




