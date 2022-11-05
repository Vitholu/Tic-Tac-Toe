const gameBoard = (() => {
	const gameBoardArray = [
		['x', 'o', 'x'],
		['x', 'o', 'x'],
		['x', 'o', 'x'],
	];
	const Player = (name, turn) => {
		gameBoardArray[0].push(turn);
	};

	return { gameBoardArray, Player };
})();

console.log(gameBoard.gameBoardArray);

// Assign each square an unique ID(1->9)
// If user clicks on square, and square is empty push "x" to array containing square.
// Display "x" on square.
