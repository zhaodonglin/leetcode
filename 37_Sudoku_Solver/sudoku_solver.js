
var clear = function(m ){
	for (var i = '1'; i<='9';i++){
		m[i]=0
	}
	m['.'] = 0
};

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
};

var isValid = function(m){
		for (key in m){
			if (m[key] >1 && !isNaN(key)){
				return false
			}
		}
		return true
};


var isValidSudoku = function(board) {
	m = {}
	clear(m)

	for (var i = 0; i<9; i++){
		for (var j = 0; j<9; j++){
			m[board[i][j]]++
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

var subSolvSudoKu = function(board, i, j) {
	if (i ==9 ) {return true}
    if (j >=9 ) {j=0;return subSolvSudoKu(board, i+1, 0)}
    
    if (board[i][j] == '.') {
         for (var k='1'; k<='9'; k++) {
         	board[i][j] = String(k)
         	
         	if (isValidSudoku(board)) {
         		if (subSolvSudoKu(board, i, j+1)) return true;
         	}
         
            board[i][j] = '.'
         }
    } else {
    	return subSolvSudoKu(board, i, j+1)	
    }
    return false
};

var solveSudoku = function(board) {
	subSolvSudoKu(board,0,0)
};


// var board = [
//   ["5","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]

// solveSudoku(board)

// console.log(board)