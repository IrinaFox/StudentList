'use strict';

function StudentListView (_students, _content) {
    var students = _students;

    this.displayStudentList = function () {
        addHeader();

        students.forEach(function (item) {
            createStudent(item);
        });
    };

    function addHeader () {
        var content = _content('studentList'),
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