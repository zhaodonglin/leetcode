package online_election

import (
	"testing"
)

func Test_Online_Election(t *testing.T) {
	topVoted := Constructor([]int{0, 1, 1, 0, 0, 1, 0}, []int{0, 5, 10, 15, 20, 25, 30})
	if 0 != topVoted.Q(3) {
		t.Error("failed")
	}

	if 1 != topVoted.Q(12) {
		t.Error("failed")
	}
}
