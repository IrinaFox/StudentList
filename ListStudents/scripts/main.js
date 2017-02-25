'use strict';

var mediator = new Mediator(),
    infoView = new InfoView(),
    editView = new EditView();

function Mediator () {
    var channels = {};

    this.sub = function (channel, callback) {
        if (!channels[channel]) {
            channels[channel] = [];
        }

        channels[channel].push(callback);
    };

    this.pub = function (channel, arg) {
        if (channels[channel]) {
            channels[channel].forEach (function (callback) {
                callback(arg);
            });
        }
    };

    return this;
}

window.addEventListener('load', function () {
    var studentList = new StudentListView();

    studentList.displayStudentList();

    var button = new ButtonView(),
        counter = new CounterView(),
        block = new BlockView();

    button.displayButton();
    block.displayBlock();
    counter.displayCounter();

}, false);