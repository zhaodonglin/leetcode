var groupAnagrams = function(strs) {
	m={}

	for(var i=0;i<strs.length;i++) {
		word = strs[i].split("").sort().join()

		if (undefined == m[word]){
			m[word] = []
		} 
		m[word].push(strs[i])
	}

	res = []
	for (var key in m){
	    res.push(m[key])
	}

	return res
};


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
