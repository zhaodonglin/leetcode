var wordIsInDict = function(word, word_map){
    if ( word_map.get(word) == undefined){
        word_map.set(word, false);
    }
    return word_map.get(word);
};

var mid_res = function(res, str){
    this.res = res;
    this.str = str;
};

var helper = function(s, word_map, cache_res, str_res, cur_word){
//    if (wordIsInDict(s, word_map)){
//        cur_word.push(s);
//       str_res.push(cur_word);
//        console.log("res", str_res);`        
//        mid = new mid_res(true, s);
//        cache_res.set(s, mid);
//        return true;
 //   }
    var final_res = false; 
    for (var i = 1; i <= s.length; i++) {
        var word = s.slice(0, i);

        if (wordIsInDict(word, word_map)) {
	    if (i == s.length){
		cur_word.push(s);
                str_res.push(cur_word);
                console.log("res", str_res);
                  
                //mid = new mid_res(true, s);
                //cache_res.set(s, mid);
                final_res = true;
                continue;
	    }
            console.log(word);
	    var this_loop_word = cur_word.slice(0);
            cur_word.push(word);
            var rest = s.slice(i);
            var res = cache_res.get(rest);
	    console.log(cur_word,res);
	    console.log("cache_res", cache_res);
            if (res == undefined) {
		console.log(i, "rest", rest, this_loop_word); 
                var helperRes = helper(rest, word_map, cache_res, str_res, cur_word);
                debugger;	
		console.log(i, "rest", rest, this_loop_word, helperRes); 
		if  (helperRes) {
		    var last_word = cur_word.slice(this_loop_word.length + 1);
		    console.log("rest", rest, "last_word", last_word);
                    if (cache_res.get(rest)==undefined){
		       var arr1 = new Array();
		       arr1.push(last_word);
		       mid = new mid_res(true,arr1);
		       cache_res.set(cur_word, mid);
                    } else {
		    	var cur_val = cache_res.get(rest);
			cur_val.str.push(cur_val);
		    }
		    final_res = true;
                } else {
		    console.log(cur_word)
	            console.log("cache_res", cache_res);
                    mid = new mid_res(false,null)
                    cache_res.set(cur_word, mid);
                }
                cur_word = this_loop_word;
            } else {
                if (res.res == true) {
		    var cur_str_arr = res.str
		    for (var i= 0; i<cur_str_arr.length;i++){
                    	console.log("cur_word", cur_str_arr[i], cur_word); 
		    	var tail_word = cur_word.concat(cur_str_arr[i]);
                    	console.log("res.str", cur_str_arr[i], tail_word);
		    	str_res.push(tail_word);
                    	console.log(str_res);
                    }
 		    final_res = true;
                } 
            }
        }
    }
    console.log("last return false");
    return final_res;
};

var wordBreak = function(s, wordDict) {
    var word_map = new Map();
    for (var i= 0; i < wordDict.length; i++){
        word_map.set(wordDict[i], true);
    }
    var cache_res = new Map();
    var str_res = new Array();
    var cur_word = new Array();
    helper(s, word_map, cache_res, str_res, cur_word);
    
    var final_res = new Array();
    for (var i = 0; i < str_res.length; i++){
    	final_res.push(str_res[i].join(" "))
    }   
    return final_res;
};
//console.log("function", wordBreak("pineapplepenapple",["apple","pen","applepen","pine","pineapple"]))

console.log("function", wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]))
//console.log("function", wordBreak("catsanddog", ["cat","cats","and","sand","dog"]));
//console.log("function", wordBreak("aaaaaaa", ["aaaa","aa","a"]));
