package merged_two_sorted_array

import "testing"

func Test_Merged_Two_Sorted_Array(t *testing.T) {
	var head ListNode
	head.Val = 1
	head.Next = nil

	var listNode1 ListNode
	listNode1.Val = 4

	var listNode2 ListNode
	listNode2.Val = 2

	append(&head, &listNode1)
	append(&head, &listNode2)
	traverse(&head)

	var head2 ListNode
	head2.Val = 3

	var listNode3 ListNode
	listNode3.Val = 5
	append(&head2, &listNode3)
	traverse(&head2)

	traverse(mergeTwoLists(&head, &head2))
}
