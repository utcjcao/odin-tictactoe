class GameBoard {
  constructor() {
    this.board = [
      [new Cell(), new Cell(), new Cell()],
      [new Cell(), new Cell(), new Cell()],
      [new Cell(), new Cell(), new Cell()],
    ];
  }

  setCell() {}

  displayBoard() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // write the html logic here
      }
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

class Player {}
