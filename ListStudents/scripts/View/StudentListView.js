'use strict';

function StudentListView () {
    var students = new StudentList();

    this.displayStudentList = function () {
        addHeader();
        students.forEach(forStudent);
    };

    function addHeader () {
        var content = document.getElementById('content'),
            containerDiv = document.createElement('div');

        containerDiv.innerHTML = headerTpl;
        containerDiv.setAttribute('id', 'menu');
        containerDiv.setAttribute('class', 'line');

        content.appendChild(containerDiv);
    }

    function forStudent (item) {
        var student = new ItemView(item);

        student.displayStudent();
        student.addEvent();
    }
 }