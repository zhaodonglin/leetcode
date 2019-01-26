function TreeNode(val){
	this.val = val;
        this.left= this.right = null;
}

var helper = function(start, end){
	var arr = new Array();
        if (start > end) {
		arr.push(null);
	} else {
	       for (var i= start; i<= end; i++){
			console.log(i, start, end);
	       	        var left_arr = helper(start, i-1);
			var right_arr = helper(i+1, end);
                        console.log("mid", i, start, end);			
			for (var j=0; j<left_arr.length;j++){
				for (var k = 0; k< right_arr.length;k++){
					var  root= new TreeNode(i);
					root.left = left_arr[j];
					root.right = right_arr[k];
					arr.push(root);
				}
			}
		}

	}
	 
	return arr;
}

var generateTrees = function(n){
	if (n == 0) return [];
	return helper(1,n);
}
console.log(generateTrees(3))
console.log("c", generateTrees(3).length);
