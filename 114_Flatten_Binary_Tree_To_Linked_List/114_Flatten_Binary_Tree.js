function TreeNode(val){
	this.val = val;
	this.left = this.right = null;
};

var flatten = function(root){
	if (root == null) {return;}
	if (root.left != null) {flatten(root.left);}
	if (root.right != null) {flatten(root.right);}
	
	var temp = root.right;
	root.right = root.left;
	root.left = null;
	while(null != root.right) root = root.right;
	root.right = temp;
	return ;
};

var node1 = new TreeNode(1);
var node2 = new TreeNode(2);
var node3 = new TreeNode(3);
var node4 = new TreeNode(4);
var node5 = new TreeNode(5);
var node6 = new TreeNode(6);

node1.left = node2;
node1.right = node5;
node2.left = node3;
node2.right = node4;
node5.right = node6;

flatten(node1);
console.log(node1);
