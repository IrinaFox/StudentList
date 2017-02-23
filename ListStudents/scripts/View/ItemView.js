'use strict';

//For one line with datas of student
function ItemView (_student, _infoWindowList) {
    var content = document.querySelector('#content'),
        containerDiv = document.createElement('div'),
        infoWindowList = _infoWindowList,
        student = _student,
        info = new InfoView(),
        moreButton,
        editButton;

    this.displayStudent = function () {
        var stringElement = replacer(student, itemTpl);

        containerDiv.innerHTML = stringElement;
        containerDiv.classList.add('line');

        content.appendChild(containerDiv);

       addEvent();
    };

    info.on('opened', function () {
        var stringElement = replacer(student, infoWindowTpl);

        infoWindowList.innerHTML = stringElement;
        document.body.appendChild(infoWindowList);

        eventToButtonClose();
    });

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
        info.set(true);
    }

    function showEdit () {
        var editView = new EditView(student, document.body);

        editView.displayEditForm(changeInfoStatus);
    }

    function eventToButtonClose () {
        var buttonClose = infoWindowList.querySelector('input');

        buttonClose.addEventListener('click', function () {
             infoWindowList.parentNode.removeChild(infoWindowList);
        }, false);
    }

    return this;
}
