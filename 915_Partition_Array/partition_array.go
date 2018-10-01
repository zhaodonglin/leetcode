package partition_array

//10:10

func getMin(right []int) int {
	min = right[0]

	for i := 0; i < len(right); i++ {
		if min > right[i] {
			min = right[i]
		}
	}

	return min
}

func isLeftLessThanRight(left []int, right []int) bool {
	min := getMin(right)
	for i := 0; i < len(left); i++ {
		if left[i] > min {
			return false
		}
	}
}

func partitionDisjoint(A []int) int {
	for i := 1; i < len(A)-1; i++ {
		if isLeftLessThanRight(A[:i], A[i:]) {
			return i
		}
	}
}
