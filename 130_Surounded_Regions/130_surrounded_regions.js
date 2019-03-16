var is_side_o = function(board, i,j){
	return ((i == 0) || (j == 0) 
                || (i == board.length-1) 
		|| (j == board[0].length - 1)) && (board[i][j] == 'o');
};

var solve = function(board) {
	console.log(board[0][0]);
	for (var i =0; i< board.length; i++){
		for (var j= 0; j < board[0].length; j++){
			if(is_side_o(board, i, j)) {
	                       	console.log(i, j);
				dfs(board, i, j);		     					                }    
		}
	}
	console.log(board);
	for (var i =0; i< board.length; i++){
		for (var j= 0; j < board[0].length; j++){
			if (board[i][j] == 'o'){board[i][j] = 'x';}
			if (board[i][j] == '$'){board[i][j] = 'o';}
		}
	}
	
	return board;
};

var dfs = function(board, i, j) {
	board[i][j] = "$";
	if (i-1>0 && board[i-1][j]== 'o') {dfs(board, i-1, j);}
	if (j-1>0 && board[i][j-1]== 'o'){dfs(board, i, j-1);}
	if (j+1<board[0].length-1 && board[i][j+1]=='o'){dfs(board, i, j+1);}
	if (i+1<board.length-1 && board[i+1][j] == 'o'){dfs(board, i+1, j);}
}

console.log(solve([['x', 'x', 'x', 'x'],
       [ 'x','o', 'o', 'x'],
       ['x', 'x', 'o', 'x'],
       ['x', 'o', 'x', 'x']]));
