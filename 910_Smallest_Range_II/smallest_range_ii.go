package smallest_range_ii

import (
	"sort"
)

func getBiggerOne(x int, y int) int {
	if x > y {
		return x
	}
	return y
}

func getSmallerOne(x int, y int) int {
	if x > y {
		return y
	}
	return x
}

func smallestRangeII(A []int, K int) int {
	sort.Ints(A)

	min := A[0]
	max := A[len(A)-1]
	res := max - min
	for i := 0; i < len(A)-1; i++ {
		biggestOne := getBiggerOne(A[i]+K, max-K)
		smallestOne := getSmallerOne(min+K, A[i+1]-K)
		res = getSmallerOne(biggestOne-smallestOne, res)
	}

	return res
}
