var input_type={
	INVALID:0,
	SPACE:1,
	SIGN:2,
	DIGIT:3,
	DOT:4,
	EXPONENT:5
};

var state ={
	INVALID:-1,
	NO_INPUT_OR_SPACE:0,
	DIGIT_INPUT:1,
	ONLY_DOT_INPUT:2,
        SIGN_INPUT:3,
	DOT_NUMBER:4,
	E_INPUT:5,
	E_AND_SIGN_INPUT:6,
	E_AND_DIGIT_INPUT:7,
        SPACE_AND_VALID_INPUT:8	
};

var table = [
	[state.INVALID,state.NO_INPUT_OR_SPACE, state.SIGN_INPUT, state.DIGIT_INPUT, state.ONLY_DOT_INPUT, state.INVALID],
	[state.INVALID, state.SPACE_AND_VALID_INPUT, state.INVALID, state.DIGIT_INPUT, state.DOT_NUMBER, state.E_INPUT],
	[state.INVALID, state.INVALID, state.INVALID, state.DOT_NUMBER, state.INVALID, state.INVALID, state.INVALID],
	[state.INVALID, state.INVALID, state.INVALID, state.DIGIT_INPUT, state.ONLY_DOT_INPUT, state.INVALID],
        [state.INVALID, state.SPACE_AND_VALID_INPUT, state.INVALID, state.DOT_NUMBER, state.INVALID, state.E_INPUT],
        [state.INVALID, state.INVALID, state.E_AND_SIGN_INPUT, state.E_AND_DIGIT_INPUT, state.INVALID, state.INVALID],
	[state.INVALID, state.INVALID, state.INVALID, state.E_AND_DIGIT_INPUT, state.INVALID, state.INVALID],
        [state.INVALID, state.SPACE_AND_VALID_INPUT, state.INVALID, state.E_AND_DIGIT_INPUT, state.INVALID, state.INVALID],
        [state.INVALID, state.SPACE_AND_VALID_INPUT, state.INVALID, state.INVALID, state.INVALID, state.INVALID]
];

var isNumber = function(s) {
        var input = input_type.INVALID;
	var arr = s.split("") 

	var i = 0;
	var stat = state.NO_INPUT_OR_SPACE;
        for (var i = 0; i < arr.length; i++){
		var input = input_type.INVALID
		if (arr[i] == ' ') input = input_type.SPACE;
		else if(arr[i] == '+' || arr[i] == '-') input = input_type.SIGN;
		else if (arr[i]>='0' && arr[i]<='9') input = input_type.DIGIT;
		else if (arr[i] == '.') input = input_type.DOT;
		else if (arr[i] == 'e' || arr[i] == 'E') input = input_type.EXPONENT;
	        stat = table[stat][input];
		console.log(stat);
		if (stat == state.INVALID) return false;
	}
	return stat == state.DIGIT_INPUT || stat == state.DOT_NUMBER || stat == state.E_AND_DIGIT_INPUT || stat == state.SPACE_AND_VALID_INPUT;
};
console.log(isNumber("1.4325e7"))
