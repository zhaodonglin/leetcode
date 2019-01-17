function ListNode(val) {
      this.val = val;
      this.next = null;
};

function NodeIsUnique(prev, cur, next){
      
      if (null != prev && prev.val == cur.val){
		return false;
      }
	
      if (null!= next && next.val == cur.val){
		return false;
      }

      return true;
}

var deleteDuplicates = function(head) {
	var pDummyHead = head;
	var node = head;
	var prev = null;
	
	var next = null;
	if (node != null) {
		next = node.next;
	}
        var pDummyHead = new ListNode();
	var isHead = true;
	var lastNode;

	while(null!= node){
		if (NodeIsUnique(prev, node, next)){
			var newNode = new ListNode();
			newNode.val = node.val;
			if (isHead){
				pDummyHead.next = newNode;
				isHead = false;
				lastNode = newNode;	
			} else {
				lastNode.next = newNode;
				lastNode = newNode;
			}  
		}
		prev = node;
		node = node.next;
		if (null != node){
                      next = node.next;
		} else {
		      next = null;
		}
	}

        return pDummyHead.next;        	    
};

var node1 = new ListNode(2);
var node2 = new ListNode(2);
var node3 = new ListNode(3);

node1.next = node2;
node2.next = node3;

console.log(deleteDuplicates(node1));
