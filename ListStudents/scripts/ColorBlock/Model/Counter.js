'use strict';

function ColorCounter () {
    var counterOfColor = {
            red: 0,
            blue: 0,
            green: 0
        },
        listeners = {
            reg: [],
            green: [],
            blue: []
        },
        colorNow = undefined;

    this.on = function (eventName, callback) {
        if (!listeners.hasOwnProperty(eventName)) {
            listeners[eventName] = [];
        }

        listeners[eventName].push(callback);
    };

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

       triggerEvent(colorNow);
    };

    function triggerEvent (eventName) {
        if (listeners.hasOwnProperty(eventName)) {
            listeners[eventName].forEach(function (callback) {
                callback();
            });
        }
    }

    return this;
}