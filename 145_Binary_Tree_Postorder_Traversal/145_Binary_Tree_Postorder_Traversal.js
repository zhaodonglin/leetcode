var postorderTraversal = function(root) {
   if (null == root){return [];}
   var stack = new Array();
   var res = new Array();

   stack.push(root);
   while(stack.length != 0) {
   		var s = stack.pop();
   		var t = s.val;
   		res.unshift(t);
   		if (null != s.left){
   			stack.push(s.left);
   		}
   		if (null != s.right){
   			stack.push(s.right);
   		}
   } 
   return res;
};

function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
};


var node1 = new TreeNode(1);
var node2 = new TreeNode(2);
var node3 = new TreeNode(3);
node1.right = node2;
node2.left  = node3;

console.log(postorderTraversal(node1));






