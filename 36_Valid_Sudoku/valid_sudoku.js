
var clear = function(m ){
	for (var i = '1'; i<='9';i++){
		m[i]=0
	}
	m['.'] = 0
}

var isValidRec = function(board){
	m ={}
	clear(m)

	for(n=0;n<9;n=n+3) {

		for(k=0; k<9; k=k+3) {

			for (var i = 0+n; i < 3+n; i++) {
				for(var j= 0 + k; j < 3 + k; j++) {   
				    m[board[i][j]]++ 
				}
			}

			if (!isValid(m)) {
				return false
			}
			clear(m)
		}
	}

	return true
}



var isValid = function(m){
		for (key in m){
			if (m[key] >1 && !isNaN(key)){
				return false
			}
		}
		return true
}
var isValidSudoku = function(board) {
	m = {}
	clear(m)

	for (var i = 0; i<9; i++){
		for (var j = 0; j<9; j++){
			m[board[i][j]]++
			//console.log(m)
		}

		if (!isValid(m)){
			return false
		}
		clear(m)
    }
    
    for (var i = 0; i<9; i++){
		for (var j = 0; j<9; j++){
			m[board[j][i]]++
		}
        //console.log(m)
		if (!isValid(m)){
			return false
		}
		clear(m)
	}

	if (!isValidRec(board)){
		return false
	}

	return true
};

var board = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]

var board2 = [
  ["5","3",".","7","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
console.log(isValidSudoku(board))
console.log(isValidSudoku(board2))