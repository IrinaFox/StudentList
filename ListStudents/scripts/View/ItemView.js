'use strict';

//For one line with datas of student
function ItemView (_student) {
    var content = document.querySelector('#content'),
        containerDiv = document.createElement('div'),
        student = _student,
        info = new InfoView(student),
        moreButton,
        editButton;

    this.displayStudent = function () {
        var stringElement = replacer(student, itemTpl);

        containerDiv.innerHTML = stringElement;
        containerDiv.classList.add('line');

        content.appendChild(containerDiv);

       addEvent();
    };

    function addEvent () {
        var buttons = containerDiv.querySelectorAll('input');

        moreButton = buttons[0];
        editButton = buttons[1];

        moreButton.addEventListener('click', info.displayInfo, false);
        editButton.addEventListener('click', showEdit, false);
    }

    function showEdit () {
        var editView = new EditView(student);

        editView.displayEditForm(info.displayInfo);
    }

    function changeMainList2 () {
        var formElements = containerDiv.querySelectorAll('.miniDiv'),
            studentValues = student.toJSON();

        [].forEach.call(formElements, function (item) {
            var formValue = studentValues[item.classList[1]];

            item.innerHTML = formValue;
        })
    }

    student.on('change', function () {
        var stringElement = replacer(student, itemTpl);
        console.log(stringElement);

        //Delete data with buttons and their events
        moreButton.removeEventListener('click', info.displayInfo, false);
        editButton.removeEventListener('click', showEdit, false);
        containerDiv.innerHTML = '';

        //Set new data and new events to buttons
        containerDiv.innerHTML = stringElement;
        addEvent();
    });

    return this;
}
