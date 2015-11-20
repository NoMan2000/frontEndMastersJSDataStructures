(function testPaint() {
    'use strict';
    var paintFill, screen, assertEqualsErrorHandler;
    paintFill = function paintFill(screen, point, newColor) {
        var originalColor, recurse;
        originalColor = screen[point.row][point.column];
        recurse = function recurse(row, column) {
            screen[row][column] = newColor;
            switch (newColor) {
                case screen[row - 1] && screen[row - 1][column] === originalColor:
                    recurse(row - 1, column);
                case screen[row + 1] && screen[row + 1][column] === originalColor:
                    recurse(row + 1, column);
                case screen[row][column - 1] === originalColor:
                    recurse(row, column - 1);
                case screen[row][column + 1] === originalColor:
                    recurse(row, column + 1);
            }
        };
        recurse(point.row, point.column);
        return screen;
    };
    screen = [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 2, 2, 2, 2, 1, 1],
        [3, 3, 3, 2, 2, 2, 1],
        [1, 1, 2, 2, 2, 3, 3],
        [1, 1, 1, 1, 3, 3, 3]
    ];
    assertEqualsErrorHandler = function assertEqualsErrorHandler(assertionOne, assertionTwo, msg) {
        msg = msg || '';
        var success = assertionOne === assertionTwo;
        if (success) {
            console.log("Passed " + assertionOne + " is equal to " + assertionTwo);
        }
        if (!success) {
            throw new Error("Failed asserting " + assertionOne + " is equal to " + assertionTwo + msg);
        }
    };
    var testPaint;
    testPaint = paintFill(screen, {row: 4, column: 4}, 5);
    assertEqualsErrorHandler(testPaint[4][4], 5);
    console.log(testPaint);

}());
