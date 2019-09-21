var Game = function () {

    var BLACK = 'b';
    var WHITE = 'w';

    var EMPTY = -1;

    var DRAGON = 'D';
    var SWORDSMAN = 'S';
    var AXEMAN = 'A';
    var BOWMAN = 'B';
    var PIKEMAN = 'P';
    var EXPLODER = 'X';

    var SYMBOLS = 'dsabpxDSABPX';

    var FLAGS = {
        NORMAL: 'n',
        CAPTURE: 'c',
    };

    var BITS = {
        NORMAL: 1,
        CAPTURE: 2,
    };

    var RANK_1 = 5;
    var RANK_2 = 4;
    var RANK_3 = 3;
    var RANK_4 = 2;
    var RANK_5 = 1;
    var RANK_6 = 0;

    var SQUARES = {
        a6: 0,  b6: 1,  c6: 2,  d6: 3,  e6: 4,  f6: 5,
        a5: 6,  b5: 7,  c5: 8,  d5: 9,  e5: 10, f5: 11,
        a4: 12, b4: 13, c4: 14, d4: 15, e4: 16, f4: 17,
        a3: 18, b3: 19, c3: 20, d3: 21, e3: 22, f3: 23,
        a2: 24, b2: 25, c2: 26, d2: 27, e2: 28, f2: 29,
        a1: 30, b1: 31, c1: 32, d1: 33, e1: 34, f1: 35
    };

    var board = new Array(98);
    var turn = WHITE;
    var move_number = 1;
    var history = [];
}