package remove_nth_node

import "testing"

//[1,2] 2
//[1] 1
func Test_FindNth(t *testing.T) {
	var head ListNode
	head.Val = 1
	head.Next = nil

	var listNode1 ListNode
	listNode1.Val = 2

	var listNode2 ListNode
	listNode2.Val = 3

	var listNode3 ListNode
	listNode3.Val = 4

	append(&head, &listNode1)
	append(&head, &listNode2)
	append(&head, &listNode3)

	traverse(&head)

	traverse(removeNthFromEnd(&head, 2))
	traverse(removeNthFromEnd(&head, 1))

	// tmp := removeNthFromEnd(&head, 2)

	// traverse(removeNthFromEnd(tmp, 1))

	//traverse(removeNthFromEnd(&head, 2))
	//traverse(removeNthFromEnd(&head, 1))

}
