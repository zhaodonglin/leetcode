var reorderList = function(head) {
    if (null==head){
        return null;
    }
    var pDummyHead = new ListNode(0);
    helper(head, pDummyHead);
    return pDummyHead.next;
    
};
    
var helper = function(head, pNode){
    var tail = head;
    var prev = head;

    var p = head;
    
    while(p.next!= null){
        prev = p;
        tail = p.next;
        p = p.next;
    }

    if (head == prev){
        pNode.next = head;
        return;
    }
    if (tail == prev){
        pNode.next = tail;
        return;
    }
    var newHead= head.next;
    var newAppendNode = tail;
    head.next = tail;
    pNode.next = head;
    prev.next = null;

    helper(newHead, newAppendNode);
    return;
};
