package x_of_a_kind

func gcd(a int, b int) int {
	if b == 0 {
		return a
	}
	return gcd(b, a%b)
}

func hasGroupsSizeX(deck []int) bool {
	groupSizeMap := make(map[int]int)
	for i := 0; i < len(deck); i++ {
		num, ok := groupSizeMap[deck[i]]
		if ok {
			num = num + 1
			groupSizeMap[deck[i]] = num
		} else {
			groupSizeMap[deck[i]] = 1
		}

	}

	minNum := 200000
	for group := range groupSizeMap {
		if minNum > groupSizeMap[group] {
			minNum = groupSizeMap[group]
		}
	}

	minGcd := 200000
	for group := range groupSizeMap {
		if minNum != groupSizeMap[group] {
			tmp := gcd(minNum, groupSizeMap[group])
			if minGcd > tmp {
				minGcd = tmp
			}
		}

	}

	if minGcd == 1 {
		return false
	}

	if minNum == 1 {
		return false
	}
	return true
}
