'use strict';

function ControllerStudentList () {
    this.implementation = function (name) {
        var _info = document.querySelector('#additionalStudentList'),
            _edit = document.querySelector('#additionalStudentList'),
            _studentList = document.querySelector('#contentStudentList'),
            address = {
                info: _info,
                edit: _edit,
                studentList: _studentList
            };

        return address[name];
    };

    this.display = function () {
        var content = this.implementation,
            infoView = new InfoView(content),
            editView = new EditView(content),
            students = new StudentList(),
            studentList = new StudentListView(students, content);

        studentList.displayStudentList();
    };

    this.display();

    return this;
}