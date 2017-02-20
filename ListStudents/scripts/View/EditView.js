'use strict';

//Make new window, where the user can edit all data except age and birthday
function EditView (_student, callback) {
    var studentOne = _student,
        student = studentOne.toJSON(),
        containerDiv = document.createElement('div'),
        string = '',
        key;

    this.displayEditForm = function (showInfo, changeMainList) {
        var infoWindowList = document.querySelector('#infoWindowList');

        if (infoWindowList) {
            infoWindowList.parentNode.removeChild(infoWindowList);

            showEdit();
        } else {
           showEdit();
        }

        addEventButtonClose();
        addEventButtonSave(showInfo, changeMainList);
    };

    function showEdit () {
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

        document.body.appendChild(containerDiv);
    }

    function addEventButtonClose () {
        var closeButton = containerDiv.querySelector('.buttonClose');

        closeButton.addEventListener('click', closeEditForm, false);
    }

    function closeEditForm () {
        containerDiv.parentNode.removeChild(containerDiv);
    }

    function addEventButtonSave (showInfo, changeMainList) {
        var saveButton = containerDiv.querySelector('.buttonSave'),
            infoView = new InfoView(studentOne);

        saveButton.addEventListener('click', function () {
            saveEditForm();
            closeEditForm();
            showInfo();
            changeMainList();
        }, false);
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

        for (key in student) {
            studentOne.set(key, newValues[index]);
            index++;
        }
    }

    return this;
}