'use strict';

function StudentListView () {
    var students = new StudentList();

    this.displayStudentList = function () {
        addHeader();
        students.forEach(createStudent);
    };

    function addHeader () {
        var content = document.querySelector('#content'),
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