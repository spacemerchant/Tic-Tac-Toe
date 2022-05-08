let currentPlayer = "X";
let lastPlayed;
let turnNumber = 0;
let board = [null,null,null,null,null,null,null,null,null];
const WINNING_COMBINATIONS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]

let cellChoice = document.querySelectorAll('.cell').forEach( item => item.addEventListener('click', event => {
    const {target} = event;
    placeChoice(target);
    turnNumber += 1;
    if (turnNumber > 4){
        if (checkWin(lastPlayed)){
            setTimeout(function() {
                alert(`${lastPlayed} WINS!`);
                reset();
              }, 100);
        }
    }
    if (turnNumber > 8){
        setTimeout(function() {
            alert(`ITS A TIE`);
            reset();
          }, 100);
    }
}))

const placeChoice = (target) => {
    document.getElementById(target.id).innerText = currentPlayer;
    board[target.id] = currentPlayer;
    currentPlayer === 'X' ? (currentPlayer = 'O', lastPlayed = 'X') : (currentPlayer = 'X' , lastPlayed = 'O');
}

const checkWin = (currentPlayer) => {
	return WINNING_COMBINATIONS.some(combination => {
		return combination.every(index => {
			return board[index] === currentPlayer;
		})
	})
}

const reset = () => {
    currentPlayer = 'X';
    lastPlayed = null;
    turnNumber = 0;
    board = [null,null,null,null,null,null,null,null,null];
    document.querySelectorAll('.cell').forEach( item => item.innerText = '')
}

document.querySelector('.game--restart').addEventListener('click', reset)