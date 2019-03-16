function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
};

var maxPathSum = function(root){
	var res = Number.MIN_SAFE_INTEGER;
	var vals = helper(root);
	return vals[1];
};

var helper = function(root){
	if (null == root){
		return [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
	}
	var left_vals = helper(root.left);
	var right_vals = helper(root.right);
	

	var left = Math.max(left_vals[0], 0);
	var right = Math.max(right_vals[0], 0);
	
	var max_res = Math.max(left_vals[1], right_vals[1]);

	max_res = Math.max(max_res, left+right+root.val);
	return [Math.max(left, right) + root.val, max_res];
};
var node1 = new TreeNode(1);
var node2 = new TreeNode(2);
var node3 = new TreeNode(3);
node1.left = node2;
node1.right = node3;
console.log(maxPathSum(node1));

