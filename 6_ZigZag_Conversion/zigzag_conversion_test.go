package zigzag_conversion

import (
	"testing"
)

func Test_Zigzag_Conversion(t *testing.T) {

	if "PAHNAPLSIIGYIR" != convert("PAYPALISHIRING", 3) {
		t.Error("failed")
	}

	if "PINALSIGYAHRPI" != convert("PAYPALISHIRING", 4) {
		t.Error("failed")
	}

	if "PAYPALISHIRING" != convert("PAYPALISHIRING", 1) {

		t.Error("failed")
	}

}
