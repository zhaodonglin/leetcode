package two_sum

func twoSum(nums []int, target int) []int {

	for index, val := range nums {
		anotherVal := target - val
		for elemIndex, elemVal := range nums {
			if elemVal == anotherVal && elemIndex != index {
				return []int{index, elemIndex}
			}
		}
	}

	return []int{-1, -1}
}
