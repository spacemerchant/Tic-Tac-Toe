class TicTacToe {
    constructor(){
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
    }

    logit = () => {
        console.log(currentPlayer)
    }
}


