(function testStacks() {
    'use strict';
    var StackHandler, assertEqualsErrorHandler;
    StackHandler = function StackHandler() {
        var props, current;
        props = {};
        current = 0;

        if (!(this instanceof StackHandler)) {
            return new StackHandler();
        }

        this.push = function push(prop) {
            props[current] = prop;
            current += 1;
            return this;
        };
        this.pop = function pop(prop) {
            var innerProp;
            if (current) {
                current -= 1;
                innerProp = props[current];
                props[current] = null;
            }
            return innerProp;
        };
        this.size = function size() {
            return current;
        };
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
    var x = StackHandler();
    assertEqualsErrorHandler(x.size(), 0);
    x.push('foo');
    assertEqualsErrorHandler(x.size(), 1);
    assertEqualsErrorHandler(x.pop(), 'foo');
    assertEqualsErrorHandler(x.size(), 0);



}());
