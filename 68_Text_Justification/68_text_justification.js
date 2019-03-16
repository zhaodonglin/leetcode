var fullJustify = function(words, maxWidth) {
	var len = 0;
	var arr = new Array();
	var str_res = new Array();
	var begin  = 0;
	var res="";
	var end  =0;
    var count = 0;
    for (var i = 0; i< words.length;i++) {
		len += words[i].length + 1;	
		if (len - 1 > maxWidth) {
            end = i-1;
			arr.push(i-1);
			count = i-1;
			var white_space_needed = maxWidth - (len - words[i].length - (end-begin) - 2);

			if (end - begin + 1 > 1) {	
			    var average = Math.floor(white_space_needed/(end - begin));	
			    var space = "";
			    console.log("average", white_space_needed, begin, end, average);
			    
			    var additional = white_space_needed - average*(end-begin);

			    for (var k  = 0; k < average; k++) {
			    	space = space + " ";
			    }
			    
			    for (var k = begin; k<end; k++) {
			    	if (additional > 0){
			    		res = res + words[k] + space + " ";
			    	} else {
			    		res = res + words[k] + space;
			    	}

			    	additional = additional - 1; 
			    }
			    res = res + words[end];
			} else {
			   	    res = words[end];

		           	for(var k = 0; k < maxWidth - words[end].length; k++){
						res = res + " ";		    		
					}
			}
            
            str_res.push(res.slice(0));
			len = words[i].length+1;
			begin = end+1;
		}
		res = "";
	}
	
	if (count < words.length){
		var left = "";
		for (var i = count+1; i < words.length-1; i++){
			left = left + words[i] + " ";
		}
		
		left = left + words[words.length-1];
	}
	
	for(var i = left.length; i < maxWidth; i++){
		left = left +" ";
	}

	str_res.push(left);
	return str_res;
};

var tr1 = fullJustify(["What","must","be","acknowledgment","shall","be"], 16);
for (var i = 0; i < tr1.length; i++) {
	console.log(tr1[i], tr1[i].length);
}

var t2 = fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16);
for (var i=0; i<t2.length;i++) {
	console.log(t2[i], t2[i].length);
}

var t3 = fullJustify(["Science","is","what","we","understand","well","enough","to","explain",
         "to","a","computer.","Art","is","everything","else","we","do"], 20);
for (var i=0; i<t3.length;i++) {
	console.log(t3[i], t3[i].length);
}

console.log(281076.71/5.03810)

