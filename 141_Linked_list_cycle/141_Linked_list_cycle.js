var hasCycle = function(head) {
    var p1 = head;
    var p2 = head;
    var count = 0;
    while(p1 != null && p2 != null){
        
        p1=p1.next;
        if (p2.next != null){
            p2=p2.next.next;
        } else {
            return null;
        }
        
        if (p1 == p2){
            return p1;
        }
        count++;
    }
    
    return null;
};

var detectCycle = function(head) {
    var fast = hasCycle(head)
    if (null== fast){
        return null;
    }
    
    var slow = head;
    while(slow != fast){
        slow = slow.next;
        fast = fast.next;
    }
    
    return slow;
};
