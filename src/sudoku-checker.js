export function Sudoku(a, b, c, d, e, f, g, h, i) {
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
    if (this.checkSudokuNumber() && this.checkSudokuRow() && this.checkSudokuColumn() && this.checkSudokuSquare()) {
        return true;
    } else {
        return false;
    }
}

Sudoku.prototype.checkSudokuNumber = function () {
    var sudoku = this;
    for (var i = 0; i < 9, i++) {
        for (var j = 0; i < 9; j++) {
            if (sudoku["row" + i][j] < 1 && sudoku["row" + i][j] > 9) {
                return false;
            }
        }
    }
    return true;
}

Sudoku.prototype.checkSudokuRow = function () {
    var sudoku = this;
    for (var i = 0; i < 9, i++) {
        if (sudoku["row" + i][0] === sudoku["row" + i][1] || sudoku["row" + i][2] || sudoku["row" + i][3] || sudoku["row" + i][4] || sudoku["row" + i][5] || sudoku["row" + i][6] || sudoku["row" + i][7] || sudoku["row" + i][8]) {
            return false;
        }
    }
    return true;
}

Sudoku.prototype.checkSudokuColumn = function () {
    var sudoku = this;
    for (var i = 0; i < 9; i++) {
        if (sudoku.row1[i] === sudoku.row2[i]] || sudoku.row3[i] || sudoku.row4[i] || sudoku.row5[i] || sudoku.row6[i] || sudoku.row7[i] || sudoku.row8[i]) {
        return false;
    }
}
return true;
}

Sudoku.prototype.checkSudokuSquare = function () {
    var sudoku = this;
    for (var i = 0; i < 9; i + 3) {
        for (var j = 1; i < 10; i + 3) {
            if (sudoku["row" + j][i] === sudoku["row" + j][i + 1] || sudoku["row" + j][i + 2] || sudoku["row" + j + 1][i] || sudoku["row" + j + 1][i + 1] || sudoku["row" + j + 1][i + 2] || sudoku["row" + j + 2][i] || sudoku["row" + j + 2][i + 1] || sudoku["row" + j + 2][i + 2]) {
                return false;
            }
        }
    }
    return true;
}