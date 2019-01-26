var minWindow = function(s,t){
	var map = new Map();
	var arr_t = t.split("");
	
	for (var i= 0; i < arr_t.length; i++){
		if (map.has(arr_t[i])) {
			val = map.get(arr_t[i]);
			map.set(arr_t[i], val + 1);
		} else {
			map.set(arr_t[i], 1);
		}
	}
      	if (s.length < t.length){
		return "";
	}


	 
        console.log(map);
        var arr_s = s.split("");
	var cnt= 0;
	var left = 0;
	var min_len  =arr_s.length;
	var res="";
        for (var i = 0; i < arr_s.length; i++){
		if (map.has(arr_s[i]))	{
			val = map.get(arr_s[i]);
			val = val -1;
			map.set(arr_s[i], val);
			if (val >=0) {
				++cnt;
			}
		}
                console.log("i", i,"left",left, "cnt",cnt, map.size)	
		while (cnt == t.length) {  
			if (min_len >= i - left +1){
				console.log(i,left)
				min_len = i - left +1;
				res = s.slice(left, i+1);        			
			}
			
			if (map.has(arr_s[left])) {
				val = map.get(arr_s[left]);
				val = val + 1;
				map.set(arr_s[left],val);
				if (val > 0) {
				    --cnt;
				}
			}
                        left++;	
		}
        }
	return res;        
}

console.log(minWindow("ADOBECODEBANC", "ABC"));


console.log(minWindow("aa", "aa"));
console.log(minWindow("a", "aa"));
console.log(minWindow("a", "a"));
