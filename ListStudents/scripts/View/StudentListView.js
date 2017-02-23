'use strict';

function StudentListView () {
    var infoDiv = document.createElement('div'),
        students = new StudentList(),
        infoView = new InfoView();

    infoDiv.setAttribute('id', 'infoWindowList');
    infoDiv.classList.add('infoWindow');

    this.displayStudentList = function () {
        addHeader();

        students.forEach(function (item) {
            createStudent(item, infoDiv);
        });
    };

    function eventToButtonClose () {
        var buttonClose = infoDiv.querySelector('input');

        buttonClose.addEventListener('click', function () {
            infoDiv.parentNode.removeChild(infoDiv);
        }, false);
    }

    function addHeader () {
        var content = document.querySelector('#content'),
            containerDiv = document.createElement('div');

        containerDiv.innerHTML = headerTpl;
        containerDiv.classList.add('line');
        containerDiv.setAttribute('id', 'menu');

        content.appendChild(containerDiv);
    }

    function createStudent (item) {
        var student = new ItemView(item, infoDiv, infoView);

        student.displayStudent();
    }
 }