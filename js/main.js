import Game from "./Game.js"
import GameView from "./GameView.js"

let game = new Game();
let gameView = new GameView();

// for a new game with class name: restart
document.querySelector(".restart")
.addEventListener("click", () => {
    onRestartClick();
})

// click on board-tile and should show an X or O on the board-tile
let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        onTileClick(tile.dataset.index);
    })
});

function onTileClick(i) {
    // make a move - user
    game.makeMove(i);
    // update board
    gameView.updateBoard(game);
}

function onRestartClick() {
    game = new Game();
    gameView.updateBoard(game);
}

gameView.updateBoard(game);