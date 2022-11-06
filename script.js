const gameBoard = (() => {
	const gameBoardArray = [[], [], []];
	const Player = (posY, posX) => {
		gameBoard.gameBoardArray[posY][posX] = 'x';
		console.log(gameBoardArray);
	};

	return { gameBoardArray, Player };
})();

const winCondition = () => {
	if (
		gameBoard.gameBoardArray[0][0] === 'x' &&
		gameBoard.gameBoardArray[0][1] === 'x' &&
		gameBoard.gameBoardArray[0][2] === 'x'
	) {
		console.log('0 -- Three');
	}
	if (
		gameBoard.gameBoardArray[1][0] === 'x' &&
		gameBoard.gameBoardArray[1][1] === 'x' &&
		gameBoard.gameBoardArray[1][2] === 'x'
	) {
		console.log('1 -- Three');
	}
	if (
		gameBoard.gameBoardArray[2][0] === 'x' &&
		gameBoard.gameBoardArray[2][1] === 'x' &&
		gameBoard.gameBoardArray[2][2] === 'x'
	) {
		console.log('2 -- Three');
	}
	if (
		gameBoard.gameBoardArray[0][0] === 'x' &&
		gameBoard.gameBoardArray[1][0] === 'x' &&
		gameBoard.gameBoardArray[2][0] === 'x'
	) {
		console.log('0-0 -- Three');
	}
	if (
		gameBoard.gameBoardArray[0][1] === 'x' &&
		gameBoard.gameBoardArray[1][1] === 'x' &&
		gameBoard.gameBoardArray[2][1] === 'x'
	) {
		console.log('1-1 -- Three');
	}
	if (
		gameBoard.gameBoardArray[0][2] === 'x' &&
		gameBoard.gameBoardArray[1][2] === 'x' &&
		gameBoard.gameBoardArray[2][2] === 'x'
	) {
		console.log('2-2 -- Three');
	}
	if (
		gameBoard.gameBoardArray[0][0] === 'x' &&
		gameBoard.gameBoardArray[1][1] === 'x' &&
		gameBoard.gameBoardArray[2][2] === 'x'
	) {
		console.log('0-0-0 -- Three');
	}
	if (
		gameBoard.gameBoardArray[0][2] === 'x' &&
		gameBoard.gameBoardArray[1][1] === 'x' &&
		gameBoard.gameBoardArray[2][0] === 'x'
	) {
		console.log('1-1-1 -- Three');
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
	return { Display };
})();

const squareBoard = document.querySelectorAll('.square');

squareBoard.forEach((e) => {
	e.addEventListener('click', (e) => {
		switch (e.target.id) {
			// Row 1
			case '0':
				if (gameBoard.gameBoardArray[0][0] !== 'x') {
					gameBoard.Player(0, 0);
					displayController.Display(0, 0, '#\\3' + e.target.id + ' ');
				}
				break;
			case '1':
				if (gameBoard.gameBoardArray[0][1] !== 'x') {
					gameBoard.Player(0, 1);
					displayController.Display(0, 1, '#\\3' + e.target.id + ' ');
				}
				break;
			case '2':
				if (gameBoard.gameBoardArray[0][2] !== 'x') {
					gameBoard.Player(0, 2);
					displayController.Display(0, 2, '#\\3' + e.target.id + ' ');
				}
				break;

			// Row 2
			case '3':
				if (gameBoard.gameBoardArray[1][0] !== 'x') {
					gameBoard.Player(1, 0);
					displayController.Display(1, 0, '#\\3' + e.target.id + ' ');
				}
				break;
			case '4':
				if (gameBoard.gameBoardArray[1][1] !== 'x') {
					gameBoard.Player(1, 1);
					displayController.Display(1, 1, '#\\3' + e.target.id + ' ');
				}
				break;
			case '5':
				if (gameBoard.gameBoardArray[1][2] !== 'x') {
					gameBoard.Player(1, 2);
					displayController.Display(1, 2, '#\\3' + e.target.id + ' ');
				}
				break;
			// Row 3
			case '6':
				if (gameBoard.gameBoardArray[2][0] !== 'x') {
					gameBoard.Player(2, 0);
					displayController.Display(2, 0, '#\\3' + e.target.id + ' ');
				}
				break;
			case '7':
				if (gameBoard.gameBoardArray[2][1] !== 'x') {
					gameBoard.Player(2, 1);
					displayController.Display(2, 1, '#\\3' + e.target.id + ' ');
				}
				break;
			case '8':
				if (gameBoard.gameBoardArray[2][2] !== 'x') {
					gameBoard.Player(2, 2);
					displayController.Display(2, 2, '#\\3' + e.target.id + ' ');
				}
				break;
			default:
				break;
		}
	});
});

// Assign each square an unique ID(1->9) - 1
// If user clicks on square, and square is empty push "x" to array containing square.
// Display "x" on square.
