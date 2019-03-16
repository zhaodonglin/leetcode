function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var sortedArrayToBST = function(nums) {
	var mid = Math.floor(nums.length/2); 
	var root = new TreeNode(nums[mid]);
        if (nums.length<=0){
		return null;
	}
	console.log(nums); 
	if (nums.length == 1) {
		return root;
	}
        
        
	root.left = sortedArrayToBST(nums.slice(0, mid));
	root.right = sortedArrayToBST(nums.slice(mid+1, nums.length));
	return root;	 
};
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var sortedListToBST = function(head) {
	var arr1 = new Array();
	var p = head;
	while (p!= null){
		arr1.push(p.val);
		p =p.next;
	}
	return sortedArrayToBST(arr1);  
};

node1 = new ListNode(-10);
node2 = new ListNode(-3);
node3 = new ListNode(0);
node4 = new ListNode(5);
node5 = new ListNode(9);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(sortedListToBST(node1));

