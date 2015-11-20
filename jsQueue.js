(function testStacks() {
    'use strict';
    var QueueHandler, assertEqualsErrorHandler;
    QueueHandler = function QueueHandler() {
        var props, current, total, getValues;
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

        this.count = this.size;

        this.contains = function contains(value) {
            return Object.keys(props).some(function (element) {
                return props[element] === value;
            });
        };

        this.peek = function peek() {
            return props[0];
        };
        this.until = function until(value) {
            var i = 0,
                j = 1,
                keys = Object.keys(props),
                keyLen = keys.length;
            for (; i < keyLen; i += 1, j += 1) {
                if (props[i] === value) {
                    return j;
                }
            }
            return false;
        }


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
    assertEqualsErrorHandler(x.contains('foo'), true);
    assertEqualsErrorHandler(x.until('foo'), 1);
    assertEqualsErrorHandler(x.until('bar'), 2);
    assertEqualsErrorHandler(x.contains('hoops'), false);
    assertEqualsErrorHandler(x.peek(), 'foo');

    assertEqualsErrorHandler(x.size(), 2);
    assertEqualsErrorHandler(x.dequeue(), 'foo');
    assertEqualsErrorHandler(x.dequeue(), 'bar');
    assertEqualsErrorHandler(x.size(), 0);
    assertEqualsErrorHandler(x.count(), 0);





}());
