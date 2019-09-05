import {
  Sudoku
} from './../src/sudoku-checker';
var correctSudoku;
var wrongSudoku;
var non1through9;

describe('Sudoku', function () {
  beforeEach(function () {
    var car1 = [2, 7, 1, 9, 5, 4, 6, 8, 3];
    var car2 = [5, 9, 3, 6, 2, 8, 1, 4, 7];
    var car3 = [4, 6, 8, 1, 3, 7, 2, 5, 9];
    var car4 = [7, 3, 6, 4, 1, 5, 8, 9, 2];
    var car5 = [1, 5, 9, 8, 6, 2, 3, 7, 4];
    var car6 = [8, 4, 2, 3, 7, 9, 5, 6, 1];
    var car7 = [9, 8, 5, 2, 4, 1, 7, 3, 6];
    var car8 = [6, 1, 7, 5, 9, 3, 4, 2, 8];
    var car9 = [3, 2, 4, 7, 8, 6, 9, 1, 5];
    correctSudoku = new Sudoku(car1, car2, car3, car4, car5, car6, car7, car8, car9);

    var war1 = [2, 7, 9, 1, 5, 4, 6, 8, 3];
    wrongSudoku = new Sudoku(war1, car2, car3, car4, car5, car6, car7, car8, car9);

    var zero1 = [2, 7, 1, 9, 5, 0, 6, 8, 3];
    non1through9 = new Sudoku(zero1, car2, car3, car4, car5, car6, car7, car8, car9);
  });
});

it('should not evaluate with any sudoku object that has numbers which are outside of 1-9', function () {
  expect(non1through9.checkSudokuNumber()).toEqual(false);
  expect(non1through9.checkSudoku()).toEqual(false);

});

it('should determine if the sudoku object has any duplicates in a column, square, or row', function () {
  expect(wrongSudoku.checkSudokuNumber()).toEqual(true);
  expect(wrongSudoku.checkSudokuRow()).toEqual(false);
  expect(wrongSudoku.checkSudokuColumn()).toEqual(false);
  expect(wrongSudoku.checkSudokuSquare()).toEqual(false);
  expect(wrongSudoku.checkSudoku()).toEqual(false);
});

it('should determine if the sudoku object has any duplicates in a column, square, or row', function () {
  expect(correctSudoku.checkSudokuNumber()).toEqual(true);
  expect(correctSudoku.checkSudokuRow()).toEqual(true);
  expect(correctSudoku.checkSudokuColumn()).toEqual(true);
  expect(correctSudoku.checkSudokuSquare()).toEqual(true);
  expect(correctSudoku.checkSudoku()).toEqual(true);
});