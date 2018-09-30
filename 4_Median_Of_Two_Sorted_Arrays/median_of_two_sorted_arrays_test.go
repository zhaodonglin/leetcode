package median_of_two_sorted_arrays

import (
	"testing"
)

func Test_Median_Of_Two_Sorted_Arrays(t *testing.T) {
	if 2.5 != findMedianSortedArrays([]int{1, 2}, []int{3, 4}) {
		t.Error("failed")
	}

	if 3 != findMedianSortedArrays([]int{1, 2}, []int{3, 4, 5}) {
		t.Error("failed")
	}
}
