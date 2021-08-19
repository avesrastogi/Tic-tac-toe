import Game from "./Game.js"
import GameView from "./GameView.js"

let game = new Game();
let gameView = new GameView();
gameView.updateBoard(game);


console.log("My turn is", game.turn);
game.nextTurn();
console.log("My turn is", game.turn);
game.makeMove(3);
console.log(game.board);