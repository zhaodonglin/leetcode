package four_sum

import "sort"

func fourSum(nums []int, target int) [][]int {
	sort.Ints(nums)
	var results [][]int

	for i := 0; i < len(nums); i++ {
		for j := i + 1; j < len(nums); j++ {
			if j > i+1 && nums[j] == nums[j-1] {
				continue
			}

			k := j + 1
			z := len(nums) - 1

			for k < len(nums) && z >= 0 && k < z {
				sum := nums[i] + nums[j] + nums[k] + nums[z]
				if sum == target {
					results = append(results, []int{nums[i], nums[j], nums[k], nums[z]})
					k = k + 1
					z = z - 1
				} else if sum < target {
					k = k + 1
				} else {
					z = z - 1
				}
			}
		}
	}

	return results
}
