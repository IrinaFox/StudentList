'use strict';

//For one line with datas of student
function ItemView (_student) {
    var containerDiv = document.createElement('div'),
        student = _student,
        moreButton,
        editButton;

    this.displayStudent = function () {
        var content = document.querySelector('#contentStudentList'),
            stringElement = replacer(student, itemTpl);

        containerDiv.innerHTML = stringElement;
        containerDiv.classList.add('line');

        content.appendChild(containerDiv);

       addEvent();
    };

    student.on('change', function () {
        var stringElement = replacer(student, itemTpl);

        //Delete data with buttons and their events
        moreButton.removeEventListener('click', changeInfoStatus, false);
        editButton.removeEventListener('click', showEdit, false);
        containerDiv.innerHTML = '';

        //Set new data and new events to buttons
        containerDiv.innerHTML = stringElement;
        addEvent();
    });

    function addEvent () {
        var buttons = containerDiv.querySelectorAll('input');

        moreButton = buttons[0];
        editButton = buttons[1];

        moreButton.addEventListener('click', changeInfoStatus, false);
        editButton.addEventListener('click', showEdit, false);
    }

    function changeInfoStatus () {
        mediator.pub('infoChange', student);
    }

    function showEdit () {
        mediator.pub('editChange', student);
    }

    return this;
}
