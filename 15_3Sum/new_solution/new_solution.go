package new_solution

import "sort"

func threeSum(nums []int) [][]int {
	sort.Ints(nums)
	var results [][]int

	for k := 0; k < len(nums); k++ {
		if nums[k] > 0 {
			break
		}

		if k > 0 && nums[k] == nums[k-1] {
			continue
		}
		enumspect := 0 - nums[k]

		i := k + 1
		j := len(nums) - 1

		for i < len(nums) && j >= 0 && i < j {
			sum := nums[i] + nums[j]
			if sum == enumspect {
				results = append(results, []int{nums[i], nums[k], nums[j]})
				for i < j && nums[i] == nums[i+1] {
					i = i + 1
				}
				for i < j && nums[j] == nums[j-1] {
					j = j - 1
				}
				i = i + 1
				j = j - 1
			} else {
				if sum > enumspect {
					j = j - 1
				} else {
					i = i + 1
				}
			}
		}
	}

	return results
}
