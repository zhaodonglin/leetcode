package cat_and_mouse

//1 to 2 distance is 1
//1 to 2 distance is 2 or more, and 2 is at the hole ,is draw
//1 to 2 distance

//mouse win----mouse to hole's distance < cat to hole's distance
// || mouse to hole's distance == cat to hole's distance and pass different nodes
//draw:mouse's next position to cat's distance is >=2 and has two paths
//cat win

import (
	"fmt"
)

const (
	MOUSE_TURN = 0
	CAT_TURN   = 1
)

const (
	CAT_WIN   = 0
	MOUSE_WIN = 1
	DRAW      = 2
)

type stepKey struct {
	mousePos  int
	catPos    int
	whoseTurn int //0:MOUSE_TURN 1:CAT_TURN
}

func cat_run(mousePos int, catPos int, graph [][]int, resMemo map[stepKey]int) int {
	fmt.Println("cat run", "mouse", mousePos, "cat", catPos)

	key := stepKey{mousePos, catPos, CAT_TURN}
	resMemo[key] = DRAW

	possiblePoses := graph[catPos]
	for i := 0; i < len(possiblePoses); i++ {
		if possiblePoses[i] == 0 {
			continue
		}
		if possiblePoses[i] == mousePos {
			key := stepKey{mousePos, catPos, CAT_TURN}
			resMemo[key] = CAT_WIN
			return CAT_WIN
		}
	}

	res := MOUSE_WIN
	for i := 0; i < len(possiblePoses); i++ {
		if possiblePoses[i] == 0 {
			continue
		}

		key := stepKey{mousePos, possiblePoses[i], MOUSE_TURN}
		tmp, ok := resMemo[key]

		if !ok {
			tmp = mouse_run(mousePos, possiblePoses[i], graph, resMemo)
		}

		if tmp == CAT_WIN {
			res = CAT_WIN
			break
		}

		if tmp == DRAW {
			res = DRAW
		}
	}

	key = stepKey{mousePos, catPos, CAT_TURN}
	resMemo[key] = res
	return res
}

func mouse_run(mousePos int, catPos int, graph [][]int, resMemo map[stepKey]int) int {
	key := stepKey{mousePos, catPos, MOUSE_TURN}
	resMemo[key] = DRAW

	fmt.Println("mouse run", "mouse", mousePos, "cat", catPos)
	possiblePoses := graph[mousePos]
	for i := 0; i < len(possiblePoses); i++ {
		if possiblePoses[i] == 0 {
			key := stepKey{mousePos, catPos, MOUSE_TURN}
			resMemo[key] = MOUSE_WIN
			return MOUSE_WIN
		}
	}

	res := CAT_WIN

	for i := 0; i < len(possiblePoses); i++ {
		if possiblePoses[i] == catPos {
			continue
		}

		key := stepKey{possiblePoses[i], catPos, CAT_TURN}
		tmp, ok := resMemo[key]
		if !ok {
			tmp = cat_run(possiblePoses[i], catPos, graph, resMemo)
			if tmp == MOUSE_WIN {
				res = MOUSE_WIN
				break
			}
		}

		if tmp == MOUSE_WIN {
			res = MOUSE_WIN
			break
		}

		if tmp == DRAW {
			res = DRAW
		}

	}

	key = stepKey{mousePos, catPos, MOUSE_TURN}
	resMemo[key] = res
	return res
}

func catMouse_run(mousePos int, catPos int, graph [][]int, resMemo map[stepKey]int) int {
	return mouse_run(mousePos, catPos, graph, resMemo)
}

func catMouseGame(graph [][]int) int {
	res := make(map[stepKey]int)
	fmt.Println(res)
	return catMouse_run(1, 2, graph, res)
}
