var funcEqual = function(dict1, dict2) {
	for(var key in dict1) {
		if (dict2[key] != dict1[key]){
			return false
		}
	}

    for(var key in dict2){
    	if (dict1[key] != dict2[key]){
    		return false
    	}
    }
	// console.log("true")
	return true
}


var findSubstring = function(s, words) {
    if (words.length == 0 || s =="") {
    	return []
    }

    var map1 = {};
    var one_word_len = words[0].length
    var i
    
    for (i in words) {
    	if (map1[words[i]] != undefined){
    		map1[words[i]] += 1
    	}else{
    	    map1[words[i]] = 1
    	}
    }

    // console.log(map1)
    //console.log(Object.keys(map1).length)

    var mapSize = Object.keys(map1).length

    var slen = s.length
    
    var arr = s.split("")
    var res = []
    
    i = 0

    for (i = 0; i <= arr.length - one_word_len * words.length; i++) {
    	
    	var map2={};
    	for (k = 0; k < words.length; k++) {
    		var tmpArr = []
    		for(j =0; j < one_word_len; j++) {
    			tmpArr.push(arr[i + one_word_len *k+j])
    		}
            
            one_word = tmpArr.join("")
    		if (map2[one_word] != undefined){
	    		map2[one_word] += 1
    		}else{
    			map2[one_word] =1 
    		}
    	}
    	// console.log("map2", map2)




    	if (funcEqual(map1, map2)){
			res.push(i)
    	}
    	map2= new Map
    }

    return res
};

console.log(findSubstring("foobarzz", ["foo", "bar"]));
console.log(findSubstring("barfoothefoobarman", ["foo", "bar"]));
console.log(findSubstring("wordgoodstudentgoodword", ["word","student"]));
console.log(findSubstring("", []));
console.log(findSubstring("wordgoodgoodgoodbestword", ["word","good","best","good"]));

