package word_subsets

func isByteMatch(A []byte, B byte) bool {
	for j := 0; j < len(A); j++ {
		if A[j] == B {
			A[j] = 0
			return true
		}
	}
	return false
}

func isWordSubset(A string, B string) bool {
	dataA := []byte(A)
	dataB := []byte(B)

	for i := 0; i < len(dataB); i++ {
		if !isByteMatch(dataA, dataB[i]) {
			return false
		}
	}
	return true
}

func isSubset(A string, B []string) bool {
	for i := 0; i < len(B); i++ {
		if !isWordSubset(A, B[i]) {
			return false
		}
	}
	return true
}

func wordSubsets(A []string, B []string) []string {
	var res []string
	for i := 0; i < len(A); i++ {
		if isSubset(A[i], B) {
			res = append(res, A[i])
		}
	}
	return res
}
