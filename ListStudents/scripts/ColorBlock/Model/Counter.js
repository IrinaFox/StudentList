'use strict';

function ColorCounter () {
    var counterOfColor = {
            red: 0,
            blue: 0,
            green: 0
        },
        colorNow = undefined;

    this.increaseCounter = function (color) {
        counterOfColor[color]++;
    };

    this.toArray = function () {
        var JSON = [],
            index = 0,
            key;

        for (key in counterOfColor) {
            JSON[index] = key;
            index++;
        }

        return JSON;
    };

    this.toJSON = function () {
        var JSON = {},
            key;

        for (key in counterOfColor) {
            JSON[key] = counterOfColor[key];
        }

        return JSON;
    };

    this.set = function (_value) {
        var value = _value,
            colorNow = value;

       this.pub(colorNow);
    };


    return this;
}