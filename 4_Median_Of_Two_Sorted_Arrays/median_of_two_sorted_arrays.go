package median_of_two_sorted_arrays

func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	len1 := len(nums1)
	len2 := len(nums2)

	mod := (len1 + len2) % 2
	k := (len1+len2)/2 + 1

	if mod == 1 {
		return find_kth_element(nums1, 0, nums2, 0, k)
	}
	return float64((find_kth_element(nums1, 0, nums2, 0, k) + find_kth_element(nums1, 0, nums2, 0, k-1))) / 2
}

func min(i int, j int) int {
	if i < j {
		return i
	}
	return j
}

func find_kth_element(num1 []int, begin1 int, num2 []int, begin2 int, k int) float64 {
	if begin1 == len(num1) {
		return float64(num2[begin2+k-1])
	}

	if begin2 == len(num2) {
		return float64(num1[begin1+k-1])
	}

	if k == 1 {
		return float64(min(num1[begin1], num2[begin2]))
	}

	cmp := k / 2
	p1 := begin1 + cmp
	p2 := begin2 + cmp

	if p1 > len(num1) {
		p1 = len(num1)
	}

	if p2 > len(num2) {
		p2 = len(num2)
	}

	if num1[p1-1] > num2[p2-1] {
		return find_kth_element(num1, begin1, num2, p2, k-(p2-begin2))
	} else {
		return find_kth_element(num1, p1, num2, begin2, k-(p1-begin1))
	}
}
