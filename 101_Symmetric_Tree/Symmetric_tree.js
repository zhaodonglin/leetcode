function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
};

var isSame = function(left, right){
	
	if (left != null  && right == null) {
		return false;
	}   
	if (left == null && right != null){
		return false;
	}
	if (left == null && right == null){
		return true;
	}
       
        if (left.val != right.val){
		return false;
	}	
	return isSame(left.left, right.right) && isSame(left.right, right.left);
}

var isSymmetric = function(root) {
	if (root==null){ return true;}
	
	return isSame(root.left, root.right);
};

node1 = new TreeNode(1);
node2 = new TreeNode(2);
node3 = new TreeNode(2);
node4 = new TreeNode(3);
node5 = new TreeNode(3);
node6 = new TreeNode(4);
node7 = new TreeNode(4);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node6;
node3.left = node7;
node3.right = node5;

console.log(isSymmetric(node1));

