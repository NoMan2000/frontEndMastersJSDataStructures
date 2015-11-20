(function testStacks() {
    'use strict';
    var QueueHandler, assertEqualsErrorHandler;
    QueueHandler = function QueueHandler() {
        var props, current, total;
        props = {};
        current = 0;
        total = 0;

        if (!(this instanceof QueueHandler)) {
            return new QueueHandler();
        }

        this.enqueue = function enqueue(prop) {
            props[total] = prop;
            total += 1;
            return total;
        };

        this.dequeue = function dequeue(prop) {
            var innerProp;
            if (total) {
                current = 0;
                innerProp = props[current];
                props[current] = props[current + 1];
                total -= 1;
            }
            return innerProp;
        };
        this.size = function size() {
            return total;
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
    var x = QueueHandler();
    assertEqualsErrorHandler(x.size(), 0);
    x.enqueue('foo');
    x.enqueue('bar');
    assertEqualsErrorHandler(x.size(), 2);
    assertEqualsErrorHandler(x.dequeue(), 'foo');
    assertEqualsErrorHandler(x.dequeue(), 'bar');
    assertEqualsErrorHandler(x.size(), 0);



}());
