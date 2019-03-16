function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var helper = function(preorder, pleft, pright, inorder, ileft, iright){
	var root = new TreeNode(preorder[pleft]);
	if (pleft > pright){
		return null;
	}
	
	if (ileft>iright){
		return null;
	}	

        for(var i = ileft; i<= iright;i++) {
		if (inorder[i] == preorder[pleft]) {
			break;	
		}
	}
	var offset = i - ileft ;
	root.left = helper(preorder, pleft+1, pleft+offset, inorder, ileft, ileft+offset-1);
	root.right =  helper(preorder, pleft+offset+1, pright, inorder, ileft+offset+1, iright);
	//console.log(root)
	return root;
};

var buildTree = function(preorder, inorder) {
    return helper(preorder, 0, preorder.length-1, inorder, 0, inorder.length -1);
};


//console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]));
console.log(buildTree([3,9,10,11,20,15,7], [10,9,11, 3,15,20,7]));
