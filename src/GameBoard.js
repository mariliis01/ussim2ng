class GameBoard {
        gameBoardTable = document.getElementById("game-board");
        boardSize = 20;

        constructor ( boardSize ) {
            this.boardSize = boardSize;
        }

    draw ( snakeCoordinates ) {
        

        for (let i = 0; i < this.boardSize; i++) {
          const rowTr = document.createElement("tr");

          for (let j = 0; j < this.boardSize; j++) {
            const cellId = document.createElement("td");
            const id = i + "-" + j;
            cellId.setAttribute("id", id);

            if ( snakeCoordinates.includes(id) ){
                cellId.classList.add('snake');
            }

            rowTr.append(cellId);
          }
          this.gameBoardTable.append(rowTr);
        }
    }
}

export {GameBoard}