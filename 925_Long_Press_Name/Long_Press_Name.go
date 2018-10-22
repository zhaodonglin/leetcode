package contest

//import "fmt"

func isLongPressedName(name string, typed string) bool {
	data := []byte(name)
	input := []byte(typed)

	i := 0
	j := 0

	for i < len(data) && j < len(input) && i <= j {
		if input[j] == data[i] {
			//fmt.Println("in", i, j)
			j = j + 1
			if i <= len(data)-2 && j < len(input) && data[i+1] == input[j] {
				i = i + 1
				//fmt.Println("loop", i, j)
			} else {

				for i < len(data) && j < len(input) && data[i] == input[j] {
					j = j + 1
					//fmt.Println("loop", i, j)
				}
				i = i + 1
			}
		} else {
			//fmt.Println("out", i, j)
			break
		}
	}

	//fmt.Println(i, len(data), j, len(input))

	return i == len(data) && j == len(input)
}
