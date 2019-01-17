function ListNode(val) {
   this.val = val;
   this.next = null;
};

var deleteDuplicates = function(head) {
   
	if (null == head){
		return;
	}
    var curVal = head.val;

    var newHead = new ListNode();
    newHead.val = head.val;
    newHead.next = null;

    var pDummyHead = newHead;

    pNode = head;
   	curNode = newHead;

    while(pNode.next != null) {
    	pNode = pNode.next;
    	if (pNode.val != curVal) {
    		newNode = new ListNode();
    		newNode.val = pNode.val;
    		newNode.next = null;

    		curNode.next = newNode;
    		curNode = newNode;

    		curVal = pNode.val;
    	}
    }
    return pDummyHead;
};


var node0 = new ListNode();
node0.val = 1;

var node1 = new ListNode();
node1.val = 1;

var node2 = new ListNode();
node2.val = 2;

var node3 = new ListNode();
node3.val =2;

node0.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = null;

console.log(node1)
console.log(deleteDuplicates(node1))

var node5 = new ListNode();
console.log(deleteDuplicates(null))