package smallest_range_ii

import (
	"fmt"
	"testing"
)

func Test_Smallest_Range(t *testing.T) {
	fmt.Println(smallestRangeII([]int{0, 10}, 2))
	if 6 != smallestRangeII([]int{0, 10}, 2) {
		t.Error("failed")
	}
}
