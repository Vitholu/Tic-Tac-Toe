let turn = 0;
let round = 1;
const gameBoard = (() => {
	const gameBoardArray = [[], [], []];
	const Player = (posY, posX, turn) => {
		if (turn % 2 === 0) {
			gameBoard.gameBoardArray[posY][posX] = 'o';
		}
		if (turn % 2 !== 0) {
			gameBoard.gameBoardArray[posY][posX] = 'x';
		}
		// console.log(gameBoardArray);
	};

	return { gameBoardArray, Player };
})();

const winCondition = () => {
	if (
		(gameBoard.gameBoardArray[0][0] === 'x' &&
			gameBoard.gameBoardArray[0][1] === 'x' &&
			gameBoard.gameBoardArray[0][2] === 'x') ||
		(gameBoard.gameBoardArray[0][0] === 'o' &&
			gameBoard.gameBoardArray[0][1] === 'o' &&
			gameBoard.gameBoardArray[0][2] === 'o')
	) {
		gameBoard.gameBoardArray[0] = [];
		gameBoard.gameBoardArray[1] = [];
		gameBoard.gameBoardArray[2] = [];
		turn = 0;
		round = 0;
		return true;
	}
	if (
		(gameBoard.gameBoardArray[1][0] === 'x' &&
			gameBoard.gameBoardArray[1][1] === 'x' &&
			gameBoard.gameBoardArray[1][2] === 'x') ||
		(gameBoard.gameBoardArray[1][0] === 'o' &&
			gameBoard.gameBoardArray[1][1] === 'o' &&
			gameBoard.gameBoardArray[1][2] === 'o')
	) {
		gameBoard.gameBoardArray[0] = [];
		gameBoard.gameBoardArray[1] = [];
		gameBoard.gameBoardArray[2] = [];
		turn = 0;
		round = 0;
		return true;
	}
	if (
		(gameBoard.gameBoardArray[2][0] === 'x' &&
			gameBoard.gameBoardArray[2][1] === 'x' &&
			gameBoard.gameBoardArray[2][2] === 'x') ||
		(gameBoard.gameBoardArray[2][0] === 'o' &&
			gameBoard.gameBoardArray[2][1] === 'o' &&
			gameBoard.gameBoardArray[2][2] === 'o')
	) {
		gameBoard.gameBoardArray[0] = [];
		gameBoard.gameBoardArray[1] = [];
		gameBoard.gameBoardArray[2] = [];
		turn = 0;
		round = 0;
		return true;
	}
	if (
		(gameBoard.gameBoardArray[0][0] === 'x' &&
			gameBoard.gameBoardArray[1][0] === 'x' &&
			gameBoard.gameBoardArray[2][0] === 'x') ||
		(gameBoard.gameBoardArray[0][0] === 'o' &&
			gameBoard.gameBoardArray[1][0] === 'o' &&
			gameBoard.gameBoardArray[2][0] === 'o')
	) {
		gameBoard.gameBoardArray[0] = [];
		gameBoard.gameBoardArray[1] = [];
		gameBoard.gameBoardArray[2] = [];
		turn = 0;
		round = 0;
		return true;
	}
	if (
		(gameBoard.gameBoardArray[0][1] === 'x' &&
			gameBoard.gameBoardArray[1][1] === 'x' &&
			gameBoard.gameBoardArray[2][1] === 'x') ||
		(gameBoard.gameBoardArray[0][1] === 'o' &&
			gameBoard.gameBoardArray[1][1] === 'o' &&
			gameBoard.gameBoardArray[2][1] === 'o')
	) {
		gameBoard.gameBoardArray[0] = [];
		gameBoard.gameBoardArray[1] = [];
		gameBoard.gameBoardArray[2] = [];
		turn = 0;
		round = 0;
		return true;
	}
	if (
		(gameBoard.gameBoardArray[0][2] === 'x' &&
			gameBoard.gameBoardArray[1][2] === 'x' &&
			gameBoard.gameBoardArray[2][2] === 'x') ||
		(gameBoard.gameBoardArray[0][2] === 'o' &&
			gameBoard.gameBoardArray[1][2] === 'o' &&
			gameBoard.gameBoardArray[2][2] === 'o')
	) {
		gameBoard.gameBoardArray[0] = [];
		gameBoard.gameBoardArray[1] = [];
		gameBoard.gameBoardArray[2] = [];
		turn = 0;
		round = 0;
		return true;
	}
	if (
		(gameBoard.gameBoardArray[0][0] === 'x' &&
			gameBoard.gameBoardArray[1][1] === 'x' &&
			gameBoard.gameBoardArray[2][2] === 'x') ||
		(gameBoard.gameBoardArray[0][0] === 'o' &&
			gameBoard.gameBoardArray[1][1] === 'o' &&
			gameBoard.gameBoardArray[2][2] === 'o')
	) {
		gameBoard.gameBoardArray[0] = [];
		gameBoard.gameBoardArray[1] = [];
		gameBoard.gameBoardArray[2] = [];
		turn = 0;
		round = 0;
		return true;
	}
	if (
		(gameBoard.gameBoardArray[0][2] === 'x' &&
			gameBoard.gameBoardArray[1][1] === 'x' &&
			gameBoard.gameBoardArray[2][0] === 'x') ||
		(gameBoard.gameBoardArray[0][2] === 'o' &&
			gameBoard.gameBoardArray[1][1] === 'o' &&
			gameBoard.gameBoardArray[2][0] === 'o')
	) {
		gameBoard.gameBoardArray[0] = [];
		gameBoard.gameBoardArray[1] = [];
		gameBoard.gameBoardArray[2] = [];
		turn = 0;
		round = 0;
		return true;
	}
};

const displayController = (() => {
	const Display = (posY, posX, id) => {
		let displayX = document.querySelector(id.toString());

		if (displayX !== null) {
			displayX.textContent = gameBoard.gameBoardArray[posY][posX];
		}
		winCondition();
	};
	const resetDisplayBoard = () => {
		gameBoard.gameBoardArray[0] = [];
		let displayX = document.querySelectorAll('.square');
		setTimeout(() => {
			displayX.forEach((e) => {
				e.textContent = '';
			});
		}, 1000);
		console.log('grat');
	};
	return { Display, resetDisplayBoard };
})();

const squareBoard = document.querySelectorAll('.square');

squareBoard.forEach((e) => {
	e.addEventListener('click', (e) => {
		switch (e.target.id) {
			// Row 1
			case '0':
				if (winCondition && round === 0) {
					displayController.resetDisplayBoard();
					if (
						gameBoard.gameBoardArray[0][0] !== 'x' &&
						gameBoard.gameBoardArray[0][0] !== 'o'
					) {
						gameBoard.gameBoardArray[0] = [];
						gameBoard.gameBoardArray[1] = [];
						gameBoard.gameBoardArray[2] = [];
						console.log(gameBoard.gameBoardArray);
						round = 1;
					}
				} else if (
					gameBoard.gameBoardArray[0][0] !== 'x' &&
					gameBoard.gameBoardArray[0][0] !== 'o'
				) {
					gameBoard.Player(0, 0, ++turn);
					displayController.Display(0, 0, '#\\3' + e.target.id + ' ');
				}
				break;
			case '1':
				if (winCondition && round === 0) {
					displayController.resetDisplayBoard();
					gameBoard.gameBoardArray[0] = [];
					gameBoard.gameBoardArray[1] = [];
					gameBoard.gameBoardArray[2] = [];
					console.log(gameBoard.gameBoardArray);
					round = 1;
				} else if (
					gameBoard.gameBoardArray[0][1] !== 'x' &&
					gameBoard.gameBoardArray[0][1] !== 'o'
				) {
					gameBoard.Player(0, 1, ++turn);
					displayController.Display(0, 1, '#\\3' + e.target.id + ' ');
				}
				break;
			case '2':
				if (winCondition && round === 0) {
					displayController.resetDisplayBoard();
					gameBoard.gameBoardArray[0] = [];
					gameBoard.gameBoardArray[1] = [];
					gameBoard.gameBoardArray[2] = [];
					console.log(gameBoard.gameBoardArray);
					round = 1;
				} else if (gameBoard.gameBoardArray[0][2] !== 'x') {
					gameBoard.Player(0, 2, ++turn);
					displayController.Display(0, 2, '#\\3' + e.target.id + ' ');
				}
				break;

			// Row 2
			case '3':
				if (winCondition && round === 0) {
					displayController.resetDisplayBoard();
					gameBoard.gameBoardArray[0] = [];
					gameBoard.gameBoardArray[1] = [];
					gameBoard.gameBoardArray[2] = [];
					console.log(gameBoard.gameBoardArray);
					round = 1;
				} else if (gameBoard.gameBoardArray[1][0] !== 'x') {
					gameBoard.Player(1, 0, ++turn);
					displayController.Display(1, 0, '#\\3' + e.target.id + ' ');
				}
				break;
			case '4':
				if (winCondition && round === 0) {
					displayController.resetDisplayBoard();
					gameBoard.gameBoardArray[0] = [];
					gameBoard.gameBoardArray[1] = [];
					gameBoard.gameBoardArray[2] = [];
					console.log(gameBoard.gameBoardArray);
					round = 1;
				} else if (gameBoard.gameBoardArray[1][1] !== 'x') {
					gameBoard.Player(1, 1, ++turn);
					displayController.Display(1, 1, '#\\3' + e.target.id + ' ');
				}
				break;
			case '5':
				if (winCondition && round === 0) {
					displayController.resetDisplayBoard();
					gameBoard.gameBoardArray[0] = [];
					gameBoard.gameBoardArray[1] = [];
					gameBoard.gameBoardArray[2] = [];
					console.log(gameBoard.gameBoardArray);
					round = 1;
				} else if (gameBoard.gameBoardArray[1][2] !== 'x') {
					gameBoard.Player(1, 2, ++turn);
					displayController.Display(1, 2, '#\\3' + e.target.id + ' ');
				}
				break;
			// Row 3
			case '6':
				if (winCondition && round === 0) {
					displayController.resetDisplayBoard();
					gameBoard.gameBoardArray[0] = [];
					gameBoard.gameBoardArray[1] = [];
					gameBoard.gameBoardArray[2] = [];
					console.log(gameBoard.gameBoardArray);
					round = 1;
				} else if (gameBoard.gameBoardArray[2][0] !== 'x') {
					gameBoard.Player(2, 0, ++turn);
					displayController.Display(2, 0, '#\\3' + e.target.id + ' ');
				}
				break;
			case '7':
				if (winCondition && round === 0) {
					displayController.resetDisplayBoard();
					gameBoard.gameBoardArray[0] = [];
					gameBoard.gameBoardArray[1] = [];
					gameBoard.gameBoardArray[2] = [];
					console.log(gameBoard.gameBoardArray);
					round = 1;
				} else if (gameBoard.gameBoardArray[2][1] !== 'x') {
					gameBoard.Player(2, 1, ++turn);
					displayController.Display(2, 1, '#\\3' + e.target.id + ' ');
				}
				break;
			case '8':
				if (winCondition && round === 0) {
					displayController.resetDisplayBoard();
					gameBoard.gameBoardArray[0] = [];
					gameBoard.gameBoardArray[1] = [];
					gameBoard.gameBoardArray[2] = [];
					console.log(gameBoard.gameBoardArray);
					round = 1;
				} else if (gameBoard.gameBoardArray[2][2] !== 'x') {
					gameBoard.Player(2, 2, ++turn);
					displayController.Display(2, 2, '#\\3' + e.target.id + ' ');
				}
				break;
			default:
				break;
		}
	});
});

/* TODO:
	- Display winner name
	- Add buttons for reset/start game
	- Add player congratulate display element.
*/
