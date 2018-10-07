package Integer_To_Roman

func intToRoman(num int) string {
	res := ""
	thousand := num / 1000
	if thousand >= 1 {
		for i := 0; i < thousand; i++ {
			res = res + "M"
		}
	}

	hundrend := (num - thousand*1000) / 100
	hundrendMap := map[int]string{1: "C", 2: "CC", 3: "CCC", 4: "CD", 5: "D", 6: "DC", 7: "DCC", 8: "CCM", 9: "CM"}

	if hundrend >= 1 {
		res = res + hundrendMap[hundrend] //append(res, hundrendMap[hundrend])
	}

	tenMap := map[int]string{1: "X", 2: "XX", 3: "XXX", 4: "XL", 5: "L", 6: "LX", 7: "LXX", 8: "XXC", 9: "XC"}
	ten := (num - thousand*1000 - hundrend*100) / 10
	if ten >= 1 {
		res = res + tenMap[ten] //append(res, tenMap[ten])
	}

	restMap := map[int]string{1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "IIX", 9: "IX"}
	rest := (num - thousand*1000 - hundrend*100 - ten*10)
	if rest > 0 {
		res = res + restMap[rest] //append(res, restMap[rest])
	}

	return res
}
