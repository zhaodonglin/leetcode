package smallest_range_i

func getMaxDifference(A []int) int {
	min := A[0]
	max := A[0]
	for i := 0; i < len(A); i++ {
		if A[i] < min {
			min = A[i]
		}
		if A[i] > max {
			max = A[i]
		}
	}
	return max - min
}

func smallestRangeI(A []int, K int) int {
	maxDif := getMaxDifference(A)
	if maxDif > 2*K {
		return maxDif - 2*K
	}
	return 0
}
