/**
 * Created by Liss on 02.02.2017.
 */

QUnit.module('test-for-liststudents test');


QUnit.test('Test 1', function (assert) {
    var expected, actual;

    var temp = createStudentsList();
    actual = (typeof temp);
    expected = "object";

    assert.equal(actual, expected);
});

