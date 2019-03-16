function TreeLinkNode(val){
	this.val = val;
	this.left = this.right = this.next = null;
};
var connect = function(root) {
	if (null == root){
		return;
	}
	var tmp = null;
    var findFirst = false;

	while(root != null){
		if (null!= root.left) { 
			root.left.next = root.right;
            if (!findFirst){tmp = root.left;findFirst = true;}
		}
		if (null != root.right) {
			root.right.next = root.next;
            if (!findFirst){tmp =root.right; findFirst = true;}
		}
		root = root.next;
	}
	//console.log(tmp);
	connect(tmp);  	  
};

var node1 = new TreeLinkNode(1);
var node2 = new TreeLinkNode(2);
var node3 = new TreeLinkNode(3);
var node4 = new TreeLinkNode(4);
var node5 = new TreeLinkNode(5);
var node6 = new TreeLinkNode(6);
var node7 = new TreeLinkNode(7);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;

connect(node1);

console.log(node1);
