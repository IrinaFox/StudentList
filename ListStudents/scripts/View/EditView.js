function EditView (_student) {
    var student = _student.toJSON(),
        containerDiv = document.createElement('div'),
        string = '',
        key;

    this.displayEditForm = function () {
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
    };

    this.addEventButtonClose = function () {
        var closeButton = containerDiv.getElementsByClassName('buttonClose')[0];


        closeButton.addEventListener('click', closeEditForm, false);
    };

    this.addEventButtonSave = function () {

    };

    function closeEditForm () {
        console.log(containerDiv);
        containerDiv.parentNode.removeChild(containerDiv);
    }

    return this;
}