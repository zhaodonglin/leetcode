package Integer_To_Roman

import (
	"testing"
)

func Test_intToRoman(t *testing.T) {
	if "MCCCXLV" != intToRoman(1345) {
		t.Error("failed to convert integer to roman")
	}
	if "LVIII" != intToRoman(58) {
		t.Error("failed to convert integer to roman")
	}
}
