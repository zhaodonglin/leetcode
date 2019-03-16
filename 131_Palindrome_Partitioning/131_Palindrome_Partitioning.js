var isPalindrome = function(s){
    if (s.length == 1) {return true;}
    var i = 0;
    var j = s.length-1;
    
    while (i < j){
        if (s[i] != s[j]){return false;} 
        i++;
        j--;
    }
    return true;
};


var partition = function(s) {
    var s1 = s.split("");
    var s1 =s;
    var res_arr = new Array();
 
    if (s1.length == 1){
        return [[s1.toString()]];
    }
    
    for (var i = 0; i < s1.length; i++){
        var part_str = s1.slice(0, i+1);
        console.log("part", part_str)
        if (isPalindrome(part_str)) { 
        
            var part_str1 = part_str.toString();
	    rest_str = s1.slice(i+1);
            if (rest_str.length > 0)
            {
                res = partition(rest_str);
                console.log("res", res, "part_str1", part_str1, res.length);
                for (var j = 0; j< res.length; j++){
                    res[j].unshift(part_str1);
                }
                //console.log("after push", res)
                res_arr = res_arr.concat(res)
                //console.log(res_arr)
            } else{
                
		res_arr = res_arr.concat([[part_str1]]);
            }

        }
    }
    return  res_arr;  
};

console.log(partition("aab"))
