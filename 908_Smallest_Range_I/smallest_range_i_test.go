package smallest_range_i

import (
	"testing"
)

func Test_Smallest_Range_I(t *testing.T) {
	if 6 != smallestRangeI([]int{0, 10}, 2) {
		t.Error("Failed")
	}

	if 0 != smallestRangeI([]int{2, 6}, 2) {
		t.Error("Failed")
	}

}
