function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
};
var minDepth = function(root) {
    var left_depth = Math.pow(2, 53) - 1 ;
    var right_depth = Math.pow(2, 53) - 1 ;
    
	if (null == root){
		return 0;
	}
    if (root.left == null && root.right == null){
        return 1;
    }
    if (root.left != null){
	    left_depth = minDepth(root.left);
    }
    if (root.right != null){
       	right_depth = minDepth(root.right); 
    }

    
	return left_depth < right_depth ? left_depth+1:right_depth+1;	
};

var node1 = new TreeNode(3);
var node2 = new TreeNode(9);
var node3 = new TreeNode(20);
var node4 = new TreeNode(15);
var node5 = new TreeNode(7);

node1.left = node2;
node1.right = node3;
node3.left = node4;
node3.right = node5;

console.log(minDepth(node1));

