'use strict';

var mediator = new Mediator(),
    infoView = new InfoView(),
    editView = new EditView();

window.addEventListener('load', function () {
    function addStudentList () {
        var container = document.querySelector('#contentStudentList'),
            studentList = new StudentListView(container);
        studentList.displayStudentList();
    }

    function addColorBlock () {
        var container = document.querySelector('#contentColorBlock'),
            button = new ButtonView(container),
            counter = new CounterView(container),
            block = new BlockView(container);

        button.displayButton();
        block.displayBlock();
        counter.displayCounter();
    }

    addStudentList();
    addColorBlock();
}, false);