package zigzag_conversion

func convert(s string, numRows int) string {
	data := []byte(s)
	res := make(map[int]string)
	row := 0
	goDown := false

	if numRows == 1 {
		return s
	}
	for i := 0; i < len(data); i++ {
		if row == 0 || row == numRows-1 {
			goDown = !goDown
		}

		res[row] = res[row] + string(data[i])
		if goDown {
			row = row + 1
		} else {
			row = row - 1
		}
	}

	var resStr string
	for r := 0; (r < len(s)) && (r < numRows); r++ {

		resStr = resStr + res[r]
	}

	return resStr
}
