let players = ['x', 'o'];
let activePlayer = 0;
let currentPlayer = '';
let playArray;

function getCellQuantity() {
	let quantity = prompt('Размер поля:');
	let array = [];
	for (let i = 0; i < quantity; i++) {
		let column = [];
		for (let x = 0; x < quantity; x++) {
			column.push('');
		}
		array.push(column);
	}
	return array;
}

function click(row, col) {
	if (activePlayer % 2 === 0) {
		playArray[row][col] = players[0];
		currentPlayer = players[0];
	} else {
		playArray[row][col] = players[1];
		currentPlayer = players[1];
	}

	renderBoard(playArray);

	playArray.forEach(element => {
		let tempCount = 0;
		for (i = 0; i < element.length; i++) {
			if (element[i] === currentPlayer) { tempCount += 1 }
		}
		tempCount === playArray.length ? showWinner(currentPlayer) : tempCount = 0;
	});


	for (let i = 0; i < playArray.length; i++) {
		let tempCount = 0;
		for (let k = 0; k < playArray.length; k++) {
			if (playArray[k][i] === currentPlayer) { tempCount += 1 }
		}
		tempCount === playArray.length ? showWinner(currentPlayer) : tempCount = 0;
	}

	let tempCount = 0;
	for (let i = 0, k = 0; i < playArray.length; i++, k++) {
		if (playArray[k][i] === currentPlayer) { tempCount += 1 }
	}
	tempCount === playArray.length ? showWinner(currentPlayer) : tempCount = 0;

	tempCount = 0;
	for (let i = 0, k = (playArray.length - 1); i < playArray.length; i++, k--) {
		if (playArray[k][i] === currentPlayer) { tempCount += 1 }
	} tempCount === playArray.length ? showWinner(currentPlayer) : tempCount = 0;

	activePlayer += 1;
}


function startGame() {
	activePlayer = 0;
	playArray = getCellQuantity();
	renderBoard(playArray);
}