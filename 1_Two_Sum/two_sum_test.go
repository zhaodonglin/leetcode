package two_sum

import (
	"testing"
)

func Test_twoSum(t *testing.T) {
	res := twoSum([]int{2, 7, 11, 15}, 9)

	if !(res[0] == 0 && res[1] == 1) {
		t.Error("Failed to pass")
	}
}
