'use strict';

//Create new window with more information. works only one time
function InfoView () {
    var listeners = {
            opened: []
        },
        opened = false,
        infoWindow;

    this.on = function (eventName, callback) {
        if (!listeners.hasOwnProperty(eventName)) {
            listeners[eventName] = [];
        }

        listeners[eventName].push(callback);
    };

    this.set = function (_boolean) {
        var value = _boolean,
            opened = value;

        if (opened === true) {
            triggerEvent('opened');
        }
    };

    function triggerEvent (eventName) {
        if (listeners.hasOwnProperty(eventName)) {
            listeners[eventName].forEach(function (callback) {
                callback();
            });
        }
    }

}