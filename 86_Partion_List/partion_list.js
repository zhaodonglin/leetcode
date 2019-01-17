function ListNode(val) {
   this.val = val;
   this.next = null;
};

var appendNode = function(newNode, tailNode){
    newNode.next = tailNode.next;
    tailNode.next = newNode;
};
var partition = function(head, x) {
    var part1 = new ListNode()
    var part2 = new ListNode()
    var equalNum = 0
    node = head
    var pDummyHead = new ListNode()

    var fistBiggerVal = true;
    var tailNodeForBiggerVal= part1;

    var firstSmallVal = false;
    var tailNodeForSmallVal = part2;

    while(node!= null){
        newNode = new ListNode()
        newNode.val  = node.val

        if (node.val >= x){
            if (fistBiggerVal){
                appendNode(newNode, part1)
                fistBiggerVal = false
            }else{
                appendNode(newNode, tailNodeForBiggerVal)
            }
            tailNodeForBiggerVal = newNode
        }else {
            if (firstSmallVal){
                appendNode(newNode, part2)
            }else{
                appendNode(newNode, tailNodeForSmallVal)
            }
            tailNodeForSmallVal = newNode
        }
        node = node.next
    }


    tailNodeForSmallVal.next = part1.next
    return part2.next
};

var node0 = new ListNode();
node0.val = 1;

var node1 = new ListNode();
node1.val = 4;

var node2 = new ListNode();
node2.val = 3;

var node3 = new ListNode();
node3.val =2;

var node4 = new ListNode();
node4.val =5;
var node5 = new ListNode();
node5.val =2;

node0.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5
node5.next = null;

var printList= function(head){
    for(var node = head; node!= null;node = node.next){
        console.log(node.val)
    }
}
//printList(node0)
printList(partition(node0,3))
