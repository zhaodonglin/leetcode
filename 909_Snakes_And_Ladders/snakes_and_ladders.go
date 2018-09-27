package snakes_and_ladders

func getXPosByIndex(index int, N int, numsOfPos int) int {
	x := (numsOfPos - index) / N
	return x
}

func getYPosByIndex(index int, N int, numsOfPos int, x int) int {
	y := -1
	if ((N - x) % 2) == 0 {
		y = (numsOfPos - index) % N
	} else {
		y = (N - 1) - (numsOfPos-index)%N
	}

	return y
}

func getBoardPosByIndex(index int, N int) (x int, y int) {
	numsOfPos := N * N
	x = getXPosByIndex(index, N, numsOfPos)
	y = getYPosByIndex(index, N, numsOfPos, x)

	return x, y
}

func bfsToGetLeastMoves(visited []int, board [][]int, nums int, N int, index int, moves int) {
	const maxLeap int = 6
	if visited[index] == -1 {
		visited[index] = moves
	} else {
		if visited[index] > moves {
			visited[index] = moves
		} else {
			return
		}
	}
	if index == nums {
		return
	}

	for i := 1; i <= maxLeap && ((index + i) <= nums); i++ {
		x, y := getBoardPosByIndex(index+i, N)
		if board[x][y] == -1 {
			bfsToGetLeastMoves(visited, board, nums, N, index+i, moves+1)
		} else {

			bfsToGetLeastMoves(visited, board, nums, N, board[x][y], moves+1)
		}
	}
}

func snakesAndLadders(board [][]int) int {
	N := len(board[0])
	visited := make([]int, N*N+1)

	for i := 0; i < N*N+1; i++ {
		visited[i] = -1
	}
	bfsToGetLeastMoves(visited, board, N*N, N, 1, 0)
	return visited[N*N]
}
