function EditView (_student, callback) {
    var studentOne = _student,
        student = studentOne.toJSON(),
        containerDiv = document.createElement('div'),
        string = '',
        key;

    this.displayEditForm = function () {
        var editForm = document.getElementById('editForm');

        if (editForm) {
            editForm.parentNode.removeChild(editForm);

            showEdit();
        } else {
           showEdit();
        }
    };

    this.addEventButtonClose = function () {
        var closeButton = containerDiv.getElementsByClassName('buttonClose')[0];

        closeButton.addEventListener('click', closeEditForm, false);
    };

    this.addEventButtonSave = function () {
        var saveButton = containerDiv.getElementsByClassName('buttonSave')[0],
            infoView = new InfoView(studentOne);

        saveButton.addEventListener('click', function () {
            saveEditForm();
            closeEditForm();
            showInfo(studentOne);
        }, false);
    };

    function closeEditForm () {
        containerDiv.parentNode.removeChild(containerDiv);
    }

    function saveEditForm () {
        var newElements = containerDiv.getElementsByClassName('editElement'),
            newValues = [],
            index = 0,
            index0 = 0,
            i;

        for (i = 0; i < newElements.length; i++) {
            newValues[index] = newElements[i].value;
            index++;
        }
        index = 0;
       console.log(newValues);

        for (key in student) {
            studentOne.set(key, newValues[index]);
            index++;
        }
    }

    function showEdit () {
        containerDiv.setAttribute('id', 'editForm');

        delete student['birthdayDate'];
        delete student['fullName'];

        for (key in student) {
            string += editTpl.replace(':value', key)
                .replace(':key', student[key]);
        }
        string += closeTpl;

        containerDiv.innerHTML = string;

        document.body.appendChild(containerDiv);
    }

    return this;
}