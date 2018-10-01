package word_subsets

import (
//"fmt"
)

func count(str string) []int {
	data := []byte(str)
	var countArr [26]int

	for i := 0; i < 26; i++ {
		countArr[i] = 0
	}

	for i := 0; i < len(data); i++ {
		countArr[data[i]-byte('a')] = countArr[data[i]-byte('a')] + 1
	}

	return countArr[:]
}

func countB(B []string) []int {
	var countArr [26]int

	for i := 0; i < 26; i++ {
		countArr[i] = 0
	}

	for i := 0; i < len(B); i++ {
		countB := count(B[i])
		for i := 0; i < 26; i++ {
			if countB[i] > countArr[i] {
				countArr[i] = countB[i]
			}
		}
	}
	return countArr[:]
}

func isWordSubset(MA []int, MB []int) bool {
	for i := 0; i < 26; i++ {
		if MA[i] < MB[i] {
			return false
		}
	}
	return true
}

func wordSubsets(A []string, B []string) []string {
	MB := countB(B)
	var res []string
	for i := 0; i < len(A); i++ {
		MA := count(A[i])
		if isWordSubset(MA, MB) {
			res = append(res, A[i])
		}
	}
	return res
}
