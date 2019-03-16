function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
};

var depth = function(root){
	if (null == root){
		return 0;
	}
	var left_depth = depth(root.left);
	var right_depth = depth(root.right);

	return 1+ (left_depth> right_depth? left_depth:right_depth);
};

var isBalanced = function(root){
    if (root == null){
        return true;
    }
    if (Math.abs(depth(root.left)- depth(root.right))>1){return false;}	
    return isBalanced(root.left) && isBalanced(root.right);
}

var node1 = new TreeNode(1);
var node2 = new TreeNode(2);
var node3 = new TreeNode(2);
var node4 = new TreeNode(3);
var node5 = new TreeNode(3);
var node6 = new TreeNode(4);
var node7 = new TreeNode(4);
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node4.left = node6;
node4.right = node7;
//node2.right = node5;
//node5.left = node6;
console.log(isBalanced(node1));
