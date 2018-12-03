
function ListNode(val) {
     this.val = val;
   this.next = null;
}
 
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    var  p1 = head
    var p2 = head
    var count = 0

    if (k ==0){
    	return head
    }
    while(p2.next != null){
    	if (count == k) {
    		break;
    	}
    	p2 = p2.next
    	count++
    }

    sum = count +1
    if (count < k){
    	sum = count + 1
    	k = k%sum
    	return rotateRight(head, k)
    }

    console.log("p1", p1.val, "p2", p2.val)
   
    while(p2.next!= null){
    	console.log("p1",p1.val)
    	p1 = p1.next
    	p2 = p2.next
    }

    p2.next = head
    p1.next = null
    return p2
};


var node1= new ListNode(1)
var node2= new ListNode(2)
var node3 = new ListNode(3)

node1.next = node2
node2.next  =node3

var printNode = function(head)
{
	var p = head
	while(p!= null){
		console.log(p.val)
		p=p.next
	}
}
printNode(node1)
printNode(rotateRight(node1,2))
// printNode(node1)