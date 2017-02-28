'use strict';

var mediator = new Mediator(),
    infoView = new InfoView(),
    editView = new EditView(),
    implementation;

window.addEventListener('load', function () {
    implementation = new Implementation();

    function addStudentList () {
        var studentList = new StudentListView();
        studentList.displayStudentList();
    }

    function addColorBlock () {
        var button = new ButtonView(),
            counter = new CounterView(),
            block = new BlockView();

        button.displayButton();
        block.displayBlock();
        counter.displayCounter();
    }

    addStudentList();
    addColorBlock();
}, false);