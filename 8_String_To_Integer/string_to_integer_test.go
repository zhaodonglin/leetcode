package string_to_integer

import (
	"fmt"
	"testing"
)

func Test_MyAtoi(t *testing.T) {
	fmt.Println(myAtoi("-1234"))
	fmt.Println(myAtoi("1234"))
	fmt.Println(myAtoi(""))
	fmt.Println(myAtoi("+"))
	fmt.Println(myAtoi("+-"))
	fmt.Println(myAtoi("-91283472332"))
}
