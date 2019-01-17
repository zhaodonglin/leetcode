function TreeNode(val){
	this.val = val;
	this.left = this.right = null;
}
function Stack()
{
 	this.stac=new Array();
 	this.pop=function(){
  		return this.stac.pop();
 	}
 	this.push=function(item){
  		this.stac.push(item);
 	}
	this.empty=function(){
		return 0==this.stac.length;
	}
	this.top=function(){
		return this.stac[this.stac.length-1];
	}
};

var inorderTraversal = function(root){
     var stack = new Stack(); 
     var arr = new Array();
     var p = root
     
      while(p || !stack.empty()){
	     
             while (p != null){
		stack.push(p)
		p = p.left	
	     } 
	     
	     p= stack.top(); stack.pop();
	     arr.push(p.val);
	     p=p.right;
      }
      
      return arr;

};

node1 = new TreeNode(1);
node2 = new TreeNode(2);
node3 = new TreeNode(3);

node1.left = null
node1.right = node2
node2.left = node3

console.log(inorderTraversal(node1));

