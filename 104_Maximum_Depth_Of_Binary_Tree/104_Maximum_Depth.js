function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
};

var helper = function(root){
	if (root == null){
		return 0;
	}
	
	return 1+Math.max(helper(root.left), helper(root.right));
};

var maxDepth = function(root) {
  	return helper(root); 
};


node1= new TreeNode(3);
node2= new TreeNode(9);
node3= new TreeNode(20);
node4= new TreeNode(15);
node5= new TreeNode(7);

node1.left = node2;
node1.right = node3;

node3.left = node4;
node3.right = node5;

console.log(maxDepth(node1));

