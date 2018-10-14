package new_solution

import "sort"

func threeSum(x []int) [][]int {
	sort.Ints(x)
	var results [][]int

	for k := 0; k < len(x); k++ {
		if x[k] > 0 {
			break
		}

		if k > 0 && x[k] == x[k-1] {
			continue
		}
		expect := 0 - x[k]

		i := k + 1
		j := len(x) - 1

		for i < len(x) && j >= 0 && i < j {
			sum := x[i] + x[j]
			if sum == expect {
				results = append(results, []int{x[i], x[k], x[j]})
				for i < j && x[i] == x[i+1] {
					i = i + 1
				}
				for i < j && x[j] == x[j-1] {
					j = j - 1
				}
				i = i + 1
				j = j - 1
			} else {
				if sum > expect {
					j = j - 1
				} else {
					i = i + 1
				}
			}
		}
	}

	return results
}
