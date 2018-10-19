package reverse_pair

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func reverse_pair(head *ListNode) *ListNode {

	if head == nil {
		return nil
	}
	if head.Next == nil {
		return head
	}
	var dummy ListNode

	p1 := head
	p2 := &dummy
	k := 0

	var lastDummy2 *ListNode
	lastDummy2 = nil
	var thisDummy2 *ListNode
	thisDummy2 = nil
	//:= nil

	var dummyHead ListNode
	//var midHead ListNode

	first := true

	//head->1->2->3->4
	for p1 != nil {
		tmp := p1.Next
		p1.Next = p2

		if k == 0 {
			p1.Next = nil

			lastDummy2 = thisDummy2
			thisDummy2 = p1
		}

		p2 = p1
		p1 = tmp
		k++

		//2->1 + 4->3
		if k == 2 {
			if first {
				dummyHead.Next = p2
				first = false

			} else {
				//fmt.Println("enter this part", p2, lastDummy2)
				lastDummy2.Next = p2
			}
			k = 0
		}
	}

	if k%2 != 0 {
		fmt.Println("enter this part", lastDummy2)
		if lastDummy2 != nil {
			lastDummy2.Next = p2
		}
		if p2 != nil {
			p2.Next = nil

		}
		//lastDummy2.Next.Next.Next = thisDummy2
	}

	return dummyHead.Next
}
