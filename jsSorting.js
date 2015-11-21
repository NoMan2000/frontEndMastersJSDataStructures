(function testSorting() {
    'use strict';
    var assertEqualsErrorHandler, bubbleSort, bubbleSortOriginal, test, expected, swap;

    Array.prototype.equals = Array.prototype.equals ||
    function (array) {
        var i = 0,
            l = this.length,
            arLen = array.length;
        if (!array || !Array.isArray(array)) {
            return false;
        }
        if (l != arLen) {
            return false;
        }

        for (; i < l; i +=1) {
            if (this[i] instanceof Array && array[i] instanceof Array) {
                if (!this[i].equals(array[i])) {
                    return false;
                }
            } else if (this[i] != array[i]) {
                return false;
            }
        }
        return true;
    };

    Number.isInteger = Number.isInteger || function (value) {
        return typeof value === "number" &&
            isFinite(value) &&
            Math.floor(value) === value;
    };

    swap = function (arr, i1, i2) {
        var validNumbers = Number.isInteger(i1) && Number.isInteger(i2);
        if (validNumbers) {
            arr[i1] = arr[i1] ^ arr[i2];
            arr[i2] = arr[i1] ^ arr[i2];
            arr[i1] = arr[i1] ^ arr[i2];
            return arr;
        }
        if (!validNumbers) {
            throw Error("Invalid arguments passed, must be integers");
        }
    };

    assertEqualsErrorHandler = function assertEqualsErrorHandler(assertionOne, assertionTwo, msg) {
        msg = msg || '';
        var success;
        if (Array.isArray(assertionOne) && Array.isArray(assertionTwo)) {
            success = assertionOne.equals(assertionTwo);
        } else {
            success = assertionOne === assertionTwo;
        }
        if (success) {
            console.log("Passed " + assertionOne + " is equal to " + assertionTwo);
        }
        if (!success) {
            throw new Error("Failed asserting " + assertionOne + " is equal to " + assertionTwo + msg);
        }
    };

    bubbleSort = function bubbleSort(a) {
        var swapped,
            i,
            temp,
            arLen = a.length;
        do {
            swapped = false;
            for (i = 0; i < arLen - 1; i += 1) {
                if (a[i] > a[i + 1]) {
                    temp = a[i];
                    a[i] = a[i + 1];
                    a[i + 1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
        return a;
    };

    bubbleSortOriginal = function bubbleSortOriginal(array) {
        // while wall > 0
        var wall = array.length; // first sorted element
        // iterate through array up to wall
        while (wall >= 0) {
            // if next value < current, swap
            for (var i = 0; i < wall; i++) {
                if (array[i] > array[i + 1]) {
                    array = swap(array, i, i + 1);
                }
            }
            wall--;
        }
        return array;
    };
    test = [1, 2, 6, 0, 11, 25, 100, 10];
    expected = [0, 1, 2, 6, 10, 11, 25, 100];

    assertEqualsErrorHandler(bubbleSort(test), expected);
    assertEqualsErrorHandler(bubbleSortOriginal(test), expected);


}());
