var strStr = function(haystack, needle) {
    var i =0;
    var j = 0;

    var begin =0;
    var index =0;

    if (needle.length === 0){
    	return 0
    }
    for (i = 0; i< haystack.length;i++){

    	begin = i;
    	index =0;

    	for (;index< needle.length&&haystack[begin] === needle[index];begin++, index++){
    	}
        console.log(begin, index)
    	if (index == needle.length){
    		return i
    	} 
    }

    if (i === haystack.length){
    	return -1
    }
};
console.log(strStr("",""))
console.log(strStr("hello", "hello"))
console.log(strStr("hello", "ll"))