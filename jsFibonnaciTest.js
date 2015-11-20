(function testFibonnaci() {
    'use strict';
    var fibonnaciStandard, assertEqualsErrorHandler, fibonnaciMap;
    fibonnaciStandard = function fibonnaciStandard(n) {
        if (n === 0 || n === 1) {
            return n;
        }
        return fibonnaciStandard(n - 1) + fibonnaciStandard(n - 2);
    };
    fibonnaciMap = function fibonnaciMap(n) {
        var memo, recurse;
        memo = {
            0: 0,
            1: 1
        };
        recurse = function recurse(m) {
            return memo[m] !== undefined ? memo[m] : recurse(m-1) + recurse(m-2);
        };
        return recurse(n);
    };
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
    assertEqualsErrorHandler(fibonnaciStandard(0), 0);
    assertEqualsErrorHandler(fibonnaciStandard(1), 1);
    assertEqualsErrorHandler(fibonnaciStandard(2), 1);
    assertEqualsErrorHandler(fibonnaciStandard(3), 2);
    assertEqualsErrorHandler(fibonnaciStandard(4), 3);
    assertEqualsErrorHandler(fibonnaciStandard(5), 5);
    assertEqualsErrorHandler(fibonnaciStandard(6), 8);
    assertEqualsErrorHandler(fibonnaciStandard(7), 13);
    assertEqualsErrorHandler(fibonnaciStandard(8), 21);
    assertEqualsErrorHandler(fibonnaciStandard(9), 34);

    assertEqualsErrorHandler(fibonnaciStandard(0), fibonnaciMap(0));
    assertEqualsErrorHandler(fibonnaciStandard(1), fibonnaciMap(1));
    assertEqualsErrorHandler(fibonnaciStandard(2), fibonnaciMap(2));
    assertEqualsErrorHandler(fibonnaciStandard(3), fibonnaciMap(3));
    assertEqualsErrorHandler(fibonnaciStandard(4), fibonnaciMap(4));
    assertEqualsErrorHandler(fibonnaciStandard(5), fibonnaciMap(5));
    assertEqualsErrorHandler(fibonnaciStandard(6), fibonnaciMap(6));
    assertEqualsErrorHandler(fibonnaciStandard(7), fibonnaciMap(7));
    assertEqualsErrorHandler(fibonnaciStandard(8), fibonnaciMap(8));
    assertEqualsErrorHandler(fibonnaciStandard(9), fibonnaciMap(9));



}());
