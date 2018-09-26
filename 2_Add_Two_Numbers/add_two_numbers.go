package add_two_numbers

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
type ListNode struct {
	Val  int
	Next *ListNode
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {

	var p *ListNode = l1
	var q *ListNode = l2

	x := 0
	y := 0
	carry := 0
	var dummyListNode ListNode
	curNode := &dummyListNode

	for p != nil || q != nil {

		if p == nil {
			x = 0
		} else {
			x = p.Val
		}

		if q == nil {
			y = 0
		} else {
			y = q.Val
		}

		val := x + y + carry
		listNode := new(ListNode)
		curNode.Next = listNode
		listNode.Val = val % 10
		listNode.Next = nil
		carry = val / 10

		curNode = listNode

		if p != nil {
			p = p.Next
		}

		if q != nil {
			q = q.Next
		}

	}

	if carry >= 1 {
		listNode := new(ListNode)
		listNode.Val = carry
		listNode.Next = nil
		curNode.Next = listNode
	}

	return dummyListNode.Next
}
