package Roman_To_Integer

import (
	"fmt"
	"testing"
)

func Test_Roman_To_Integer(t *testing.T) {
	fmt.Println(roman_to_integer("MCCCXLV"))
	fmt.Println(roman_to_integer("M"))
	fmt.Println(roman_to_integer("MCCC"))
	fmt.Println(roman_to_integer("XLV"))
	fmt.Println(roman_to_integer("VII"))
	fmt.Println(roman_to_integer("VI"))
	fmt.Println(roman_to_integer("VI"))
	fmt.Println(roman_to_integer("DCXXI"))
}
