export function Sudoku(a, b, c, d, e, f, g, h, i) {
  //requires 9 arrays of length 9
  this.row1 = a;
  this.row2 = b;
  this.row3 = c;
  this.row4 = d;
  this.row5 = e;
  this.row6 = f;
  this.row7 = g;
  this.row8 = h;
  this.row9 = i;
}

Sudoku.prototype.checkSudoku = function () {
  //checks to see if the sudoku meets all criteria.
  if (this.checkSudokuNumber() && this.checkSudokuRow() && this.checkSudokuColumn() && this.checkSudokuSquare()) {
    return true;
  } else {
    return false;
  }
};

Sudoku.prototype.checkSudokuNumber = function () {
  //checks to see if all numbers in the sudoku puzzle are between 1-9
  var sudoku = this;
  for (var i = 0; i < 9; i++) {
    for (var j = 0; i < 9; j++) {
      if (sudoku["row" + i][j] < 1 && sudoku["row" + i][j] > 9) {
        return false;
      }
    }
  }
  return true;
};

Sudoku.prototype.checkSudokuRow = function () {
  //checks row by row to make sure that each item of the row is unique
  var sudoku = this;
  for (var i = 0; i < 9; i++) {
    if (sudoku["row" + i][0] === sudoku["row" + i][1] || sudoku["row" + i][2] || sudoku["row" + i][3] || sudoku["row" + i][4] || sudoku["row" + i][5] || sudoku["row" + i][6] || sudoku["row" + i][7] || sudoku["row" + i][8]) {
      return false;
    }
  }
  return true;
};

Sudoku.prototype.checkSudokuColumn = function () {
  //checks column by column to make sure that each item of the row is unique
  var sudoku = this;
  for (var i = 0; i < 9; i++) {
    if (sudoku.row1[i] === sudoku.row2[i] || sudoku.row3[i] || sudoku.row4[i] || sudoku.row5[i] || sudoku.row6[i] || sudoku.row7[i] || sudoku.row8[i]) {
      return false;
    }
  }
  return true;
};

Sudoku.prototype.checkSudokuSquare = function () {
  //checks each square to see if the charcters are unique
  var sudoku = this;
  for (var i = 0; i < 9; i += 3) {
    for (var j = 1; j < 10; j += 3) {
      var k = j + 1;
      var l = j + 2;
      var a = [];
      a.push(sudoku["row" + j][i]);
      a.push(sudoku["row" + j][i + 1]);
      a.push(sudoku["row" + j][i + 2]);
      a.push(sudoku["row" + k][i]);
      a.push(sudoku["row" + k][i + 1]);
      a.push(sudoku["row" + k][i + 2]);
      a.push(sudoku["row" + l][i]);
      a.push(sudoku["row" + l][i + 1]);
      a.push(sudoku["row" + l][i + 2]);

      if (a.slice(1,8).includes(a[0])) {
        return false;
      }
    }
  }
  return true;
};