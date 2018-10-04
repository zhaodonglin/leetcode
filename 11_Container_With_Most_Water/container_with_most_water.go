package Container_With_Most_Water

func getMin(height []int, begin, end int) int {
	//min := height[begin]
	if height[begin] < height[end] {
		return height[begin]
	}

	return height[end]
}

func maxArea(height []int) int {
	maxArea := 0
	for begin := 0; begin < len(height)-1; begin++ {
		for end := begin + 1; end < len(height); end++ {
			min := getMin(height, begin, end)
			if min*(end-begin) > maxArea {
				maxArea = min * (end - begin)
			}
		}
	}
	return maxArea
}
