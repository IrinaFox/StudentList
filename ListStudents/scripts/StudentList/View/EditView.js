'use strict';

//Make new window, where the user can edit all data except age and birthday
function EditView () {
    var containerDiv = document.createElement('div'),
        key;

    mediator.sub('editChange', function (_student) {
        var infoWindowList = document.querySelector('#infoWindowList'),
            student = _student,
            studentJSON = student.toJSON();

        if (infoWindowList) {
            infoWindowList.parentNode.removeChild(infoWindowList);
        }

        showEdit(studentJSON);

        addEventButtonClose();
        addEventButtonSave(student, studentJSON);
    });

    function showEdit (_student) {
        var content = document.querySelector('#additionalStudentList'),
            student = _student,
            string = '';

        containerDiv.setAttribute('id', 'infoWindowList');

        delete student['birthdayDate'];
        delete student['fullName'];
        delete student['age'];

        for (key in student) {
            string += editTpl.replace(':value', key)
                .replace(':key', student[key]);
        }

        string += buttonTpl;
        containerDiv.innerHTML = string;

        content.appendChild(containerDiv);
    }

    function addEventButtonClose () {
        var closeButton = containerDiv.querySelector('.buttonClose');

        closeButton.addEventListener('click', closeEditForm, false);
    }

    function closeEditForm () {
        containerDiv.parentNode.removeChild(containerDiv);
    }

    function addEventButtonSave (_student, _studentJSON) {
        var saveButton = containerDiv.querySelector('.buttonSave'),
            student = _student;

        saveButton.addEventListener('click', function () {
            saveEditForm(student, _studentJSON);
            closeEditForm();
            mediator.pub('infoChange', student);
        }, false);
    }

    function saveEditForm (_student, _studentJSON) {
        var newElements = containerDiv.querySelectorAll('.editElement'),
            studentJSON = _studentJSON,
            student = _student,
            newValues = [],
            index = 0,
            i;

        for (i = 0; i < newElements.length; i++) {
            newValues[index] = newElements[i].value;
            index++;
        }

        index = 0;

        for (key in studentJSON) {
            student.set(key, newValues[index]);
            index++;
        }
    }

    return this;
}