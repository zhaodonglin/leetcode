package string_to_integer

const (
	INT_MAX = 1<<31 - 1
	INT_MIN = (-1) << 31
)

func myAtoi(str string) int {
	data := []byte(str)
	sign := 1
	val := 0
	i := 0

	if len(data) == 0 {
		return 0
	}

	for i = 0; i < len(data) && data[i] == ' '; i++ {
	}

	if i < len(data) && (data[i] == '+' || data[i] == '-') {
		if data[i] == '+' {
			sign = 1
		} else {
			sign = -1
		}
		i++
	}

	for i < len(data) && (data[i] >= '0' && data[i] <= '9') {
		if val > INT_MAX/10 || (val == INT_MAX/10 && data[i]-'0' > 7) {
			if sign == 1 {
				return INT_MAX
			} else {
				return INT_MIN
			}
		}
		val = val*10 + int(data[i]-'0')
		i++
	}

	return val * sign
}
