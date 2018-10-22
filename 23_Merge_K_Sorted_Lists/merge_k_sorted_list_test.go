package merge_k_sorted

import "testing"

func Test_merge_k_sorted_list(t *testing.T) {
	var head ListNode
	head.Val = 1
	head.Next = nil

	var listNode1 ListNode
	listNode1.Val = 4

	var listNode2 ListNode
	listNode2.Val = 2

	listNode1.Next = head.Next
	head.Next = &listNode1

	listNode2.Next = head.Next
	head.Next = &listNode2

	var head2 ListNode
	head2.Val = 3

	var listNode3 ListNode
	listNode3.Val = 5

	listNode3.Next = head2.Next
	head2.Next = &listNode3

	var head3 ListNode
	head3.Val = 6

	var head4 ListNode
	head4.Val = 7

	var listNode4 ListNode
	listNode4.Val = 8

	listNode4.Next = head4.Next
	head4.Next = &listNode4

	traverse(mergeKLists([]*ListNode{&head, &head2, &head3, &head4}))
}
