'use strict';

//Make new window, where the user can edit all data except age and birthday
function EditView () {
    var containerDiv = document.createElement('div'),
        closeButton,
        saveButton,
        student,
        studentJSON,
        key;

    containerDiv.setAttribute('id', 'infoWindowList');

    mediator.sub('editChange', function (_student) {
        var infoWindowList = document.querySelector('#infoWindowList');

        student = _student;
        studentJSON = student.toJSON();

        if (infoWindowList) {
            infoWindowList.parentNode.removeChild(infoWindowList);
        }

        showEdit();
        addEventButtonClose();
        addEventButtonSave();
    });

    function showEdit () {
        var content = document.querySelector('#additionalStudentList'),
            string = '';

        delete studentJSON['birthdayDate'];
        delete studentJSON['fullName'];
        delete studentJSON['age'];

        for (key in studentJSON) {
            string += editTpl.replace(':value', key)
                .replace(':key', studentJSON[key]);
        }

        string += buttonTpl;
        containerDiv.innerHTML = string;

        content.appendChild(containerDiv);
    }

    function addEventButtonClose () {
        closeButton = containerDiv.querySelector('.buttonClose');
        closeButton.addEventListener('click', closeEditForm, false);
    }

    function closeEditForm () {
        containerDiv.parentNode.removeChild(containerDiv);
        closeButton.removeEventListener('click', closeEditForm);
    }

    function addEventButtonSave () {
        saveButton = containerDiv.querySelector('.buttonSave');
        saveButton.addEventListener('click', saveEditForm, false);
    }

    function saveEditForm () {
        var newElements = containerDiv.querySelectorAll('.editElement'),
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

        closeEditForm();
        mediator.pub('infoChange', student);
        saveButton.removeEventListener('click', saveEditForm);
    }

    return this;
}