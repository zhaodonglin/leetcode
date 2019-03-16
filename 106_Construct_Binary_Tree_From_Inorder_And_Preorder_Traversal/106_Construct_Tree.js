function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var helper = function(postorder, pleft, pright, inorder, ileft, iright){
	var root = new TreeNode(postorder[pright]);
	console.log(pleft, pright, ileft, iright);
	if (pleft > pright){
		return null;
	}
	
	if (ileft>iright){
		return null;
	}	

        for(var i = ileft; i<= iright;i++) {
		if (inorder[i] == postorder[pright]) {
			break;	
		}
	}
	var offset = i - ileft ;
	root.left = helper(postorder, pleft, pleft+offset-1, inorder, ileft, ileft+offset-1);
	root.right =  helper(postorder, pleft+offset, pright-1, inorder, ileft+offset+1, iright);
	
	return root;
};

var buildTree = function(postorder, inorder) {
    return helper(postorder, 0, postorder.length-1, inorder, 0, inorder.length -1);
};

console.log(buildTree([9,15,7,20,3], [9,3,15,20,7]))
