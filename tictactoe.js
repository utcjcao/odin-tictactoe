class GameBoard {
  constructor() {
    this.board = [];
  }

  initializeBoard() {
    this.board = [];
    for (let i = 0; i < 3; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        row.push(new Cell());
      }
      this.board.push(row);
    }
  }

  checkWin() {
    for (let i = 0; i < 3; i++) {
      let allX = true;
      let allO = true;
      for (let j = 0; j < 3; j++) {
        if (this.board[i][j].content != "x") {
          allX = false;
        }
        if (this.board[i][j].content != "o") {
          allO = false;
        }
      }
      if (allX) {
        return "x";
      } else if (allO) {
        return "o";
      }
    }
    for (let i = 0; i < 3; i++) {
      let allX = true;
      let allO = true;
      for (let j = 0; j < 3; j++) {
        if (this.board[j][i].content != "x") {
          allX = false;
        }
        if (this.board[j][i].content != "o") {
          allO = false;
        }
      }
      if (allX) {
        return "x";
      } else if (allO) {
        return "o";
      }
    }

    let allX = true;
    let allO = true;
    for (let i = 0; i < 3; i++) {
      if (this.board[i][i].content != "x") {
        allX = false;
      }
      if (this.board[i][i].content != "o") {
        allO = false;
      }
    }
    if (allX) {
      return "x";
    } else if (allO) {
      return "o";
    }
    allX = true;
    allO = true;
    for (let i = 0; i < 3; i++) {
      if (this.board[i][2 - i].content != "x") {
        allX = false;
      }
      if (this.board[i][2 - i].content != "o") {
        allO = false;
      }
    }
    if (allX) {
      return "x";
    } else if (allO) {
      return "o";
    }

    return "none";
  }
}

class Cell {
  constructor() {
    this.content = "";
  }
}

class GameCycle {
  constructor() {
    this.gameBoard = new GameBoard();
    this.gameBoard.initializeBoard();
    this.currentTurn = "x";
    this.gameFinished = false;
  }

  displayBoard() {
    let boardDiv = document.getElementById("board");
    boardDiv.innerHTML = "";
    for (let i = 0; i < 3; i++) {
      let rowDiv = document.createElement("div");
      rowDiv.classList.add("row");
      for (let j = 0; j < 3; j++) {
        const cell = document.createElement("button");
        cell.id = i.toString + j.toString;
        cell.textContent = this.gameBoard.board[i][j].content;
        cell.addEventListener("click", () => {
          this.setCell(i, j);
        });
        rowDiv.appendChild(cell);
      }
      boardDiv.appendChild(rowDiv);
    }
  }

  setCell(i, j) {
    if (this.gameFinished) {
      return;
    }
    if (this.gameBoard.board[i][j].content == "") {
      this.gameBoard.board[i][j].content = this.currentTurn;
      this.currentTurn = this.currentTurn == "x" ? "o" : "x";
    }

    this.displayBoard();

    let winner = this.gameBoard.checkWin();
    if (winner != "none") {
      const winnerDiv = document.getElementById("winner");
      winnerDiv.textContent = winner + " wins!";
      this.gameFinished = true;
    }
  }

  resetGame() {
    const winnerDiv = document.getElementById("winner");
    winnerDiv.textContent = "";
    this.gameFinished = false;
    this.currentTurn = "x";
    this.gameBoard.initializeBoard();
    this.displayBoard();
  }
}

let game = new GameCycle();

const restartBtn = document.getElementById("restart");
restartBtn.addEventListener("click", () => game.resetGame());

game.displayBoard();
