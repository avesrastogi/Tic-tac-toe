export default class Game {
    
    constructor() {
        console.log("init game");
        this.turn = "X";
        this.board = new Array(9).fill(null)
    }

    nextTurn() {
        if(this.turn == "X") {
            this.turn = "O";
        }
        else {
            this.turn = "X";
        }
    }

    makeMove(i) {

        if(this.endOfGame()) {
            return;
        }

        // already an X or O do not change/makeMove
        if(this.board[i]) {
            return;
        }
        
        this.board[i] = this.turn;    // X or O
        let winningCombination = this.findWinningCombinations();
        
        // if won do not change turn
        if(!winningCombination) {
            this.nextTurn();
        }
    }


    findWinningCombinations() {

        // winning conditions: 
        // Horizontal = [0, 1, 2]; [3, 4, 5]; [6, 7, 8]
        // vertical = [0, 3, 6]; [1, 4, 7]; [2, 5, 8]
        // diagonal = [0, 4, 8]; [2, 4, 6]
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [6, 4, 2]
        ]

        for(const combination of winningCombinations) {

            const [a, b, c] = combination;

            // check if player on 0 === player on 1 and 2; [0, 1, 2]
            if(this.board[a] && 
                (this.board[a] === this.board[b] && this.board[a] === this.board[c])) {
                    return combination;
            }
        }
        return null;
    }

    endOfGame() {

        // found a winning combination, end the game
        let winningCombination = this.findWinningCombinations();
        if(winningCombination)  {
            return true;
        }
        else {
            return false;
        }
    }
}