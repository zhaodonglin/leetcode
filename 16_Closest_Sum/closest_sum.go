package closest_sum

import "sort"

func abs(val int) int {
	if val < 0 {
		return -val
	}
	return val
}

func threeSumClosest(nums []int, target int) int {
	sort.Ints(nums)
	mindiff := abs(nums[0] + nums[1] + nums[2] - target)

	for k := 0; k < len(nums); k++ {
		i := k + 1
		j := len(nums) - 1

		for i < len(nums) && j >= 0 && i < j {
			sum := nums[i] + nums[j] + nums[k]

			diff := abs(sum - target)
			if diff == mindiff {
				i = i + 1
			} else {
				if diff > mindiff {
					j = j - 1
				} else {
					mindiff = diff
					i = i + 1
				}
			}

		}
	}

	return mindiff
}
