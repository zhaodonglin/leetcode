function TreeNode(val){
	this.val = val;
	this.left= this.right =null;
};

var helper = function(root, min, max){
	if (root == null) {
		return true;	
	}
	if (!(root.val > min && root.val< max)){
		return false;
	}

	return helper(root.left, min, root.val) 
	&& helper(root.right, root.val,max)
};
var isValidBST = function(root){
	if (null == root){
		return true;
	}	
     return helper(root, -Number.MAX_VALUE, Number.MAX_VALUE);
};

root = new TreeNode(2);
left = new TreeNode(1);
right = new TreeNode(3)
root.left = left
root.right = right

root2 = new TreeNode(5)
left = new TreeNode(1)
right1 = new TreeNode(4)
right2 = new TreeNode(3)
right3 = new TreeNode(6)

root2.left = left
root2.right = right1
right1.left = right2
right1.right = right3

console.log(isValidBST(root2))
console.log(isValidBST(root))
//[10,5,15,null,null,6,20]

