'use strict';

function StudentListView (_container) {
    var students = new StudentList();

    this.displayStudentList = function () {
        addHeader(_container);

        students.forEach(function (item) {
            createStudent(item);
        });
    };

    function addHeader (_container) {
        var content = _container,
            containerDiv = document.createElement('div');

        containerDiv.innerHTML = headerTpl;
        containerDiv.classList.add('line');
        containerDiv.setAttribute('id', 'menu');

        content.appendChild(containerDiv);
    }

    function createStudent (item) {
        var student = new ItemView(item);
        student.displayStudent();
    }
 }