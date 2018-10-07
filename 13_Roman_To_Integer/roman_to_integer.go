package Roman_To_Integer

func roman_to_integer(s string) int {
	res := 0
	data := []byte(s)
	romanToIntMap := map[byte]int{'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
	i := 0
	for i < len(data) {
		if i <= len(data)-3 {
			if romanToIntMap[data[i]] > romanToIntMap[data[i+1]] {
				res = res + romanToIntMap[data[i]]
				i = i + 1
			} else {
				if romanToIntMap[data[i]] == romanToIntMap[data[i+1]] {
					if romanToIntMap[data[i+1]] == romanToIntMap[data[i+2]] {
						res = res + romanToIntMap[data[i]]*3
						i = i + 3
					} else {
						res = res + romanToIntMap[data[i]]
						i = i + 1
					}
				} else {
					res = res - romanToIntMap[data[i]] + romanToIntMap[data[i+1]]
					i = i + 2
				}
			}
		} else {
			if i == len(data)-2 {
				if romanToIntMap[data[i]] > romanToIntMap[data[i+1]] {
					res = res + romanToIntMap[data[i]]
					i = i + 1
				} else {
					if romanToIntMap[data[i]] == romanToIntMap[data[i+1]] {
						res = res + romanToIntMap[data[i]]*2
						return res
					} else {
						res = res - romanToIntMap[data[i]] + romanToIntMap[data[i+1]]
						return res
					}
				}
			} else {
				res = res + romanToIntMap[data[i]]
				return res
			}
		}
	}
	return res
}
