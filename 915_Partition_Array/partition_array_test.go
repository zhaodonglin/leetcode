package partition_array

import (
	"testing"
)

func Test_Partition_Array(t *testing.T) {
	if 3 != partitionDisjoint([]int{5, 0, 3, 8, 6}) {
		t.Error("failed!")
	}

	if 4 != partitionDisjoint([]int{1, 1, 1, 0, 6, 12}) {
		t.Error("failed")
	}

	if 1 != partitionDisjoint([]int{1, 1}) {
		t.Error("failed")
	}
}
