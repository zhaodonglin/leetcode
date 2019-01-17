 function ListNode(val) {
      this.val = val;
      this.next = null;
 }

var reverseBetween = function(head,m,n){
	var dummyHead = new ListNode();
	var node = head;
	var count = 1;
	var curNode;
	var tailNode;
        var prevNode;
        var lastNode;

	if (m ==1){
		prevNode = head;
	}
	while(null!=node) {
		if (count == m-1){
		    prevNode = node;
		} 
		
		if ((count >= m) && (count <= n)){
			var newNode = new ListNode();
			newNode.val = node.val;		
			newNode.next = dummyHead.next;
			dummyHead.next = newNode;
                	if (count ==m){
			 	tailNode = newNode;
		        }
		}
		
		if (count == n){
			lastNode = node.next;
			break;
		}	
		
                count = count +1;
                node = node.next;
	}

	prevNode.next = dummyHead.next;
	tailNode.next = lastNode;
	if (m==1){
		return prevNode.next;
	}else{
		return head;
	}
}

var node1 = new ListNode(1);
var node2 = new ListNode(2);
var node3 = new ListNode(3);
var node4 = new ListNode(4);
var node5 = new ListNode(5);

node1.next= node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
var head = node1;

//console.log(reverseBetween(head, 1,5))

//console.log(reverseBetween(head, 1,4))
//console.log(reverseBetween(head, 2,5))
console.log(reverseBetween(head, 2,4))
