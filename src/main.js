import {Sudoku} from './sudoku-checker';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

var car1 = [2, 7, 1, 9, 5, 4, 6, 8, 3];
var car2 = [5, 9, 3, 6, 2, 8, 1, 4, 7];
var car3 = [4, 6, 8, 1, 3, 7, 2, 5, 9];
var car4 = [7, 3, 6, 4, 1, 5, 8, 9, 2];
var car5 = [1, 5, 9, 8, 6, 2, 3, 7, 4];
var car6 = [8, 4, 2, 3, 7, 9, 5, 6, 1];
var car7 = [9, 8, 5, 2, 4, 1, 7, 3, 6];
var car8 = [6, 1, 7, 5, 9, 3, 4, 2, 8];
var car9 = [3, 2, 4, 7, 8, 6, 9, 1, 5];
var correctSudoku = new Sudoku(car1, car2, car3, car4, car5, car6, car7, car8, car9);

$(document).ready(function () {
  $("body").append("Is this sudoku correct? " + correctSudoku.checkSudoku());
});