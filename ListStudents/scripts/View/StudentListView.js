'use strict';

StudentList.prototype.displayStudentList = function () {
    var students = new StudentList(),
        studentList = students.getStudentList();

    addHeader();

    [].forEach.call(studentList, function (item) {
        var student = new ItemView(item);

        student.displayStudent();
        student.addEvent();
    });
};

//Adding header
function addHeader () {
    var content = document.getElementById('content');

    content.innerHTML += headerTpl;
}


/*function displayStudentList(_students) {
    var students = _students;

    addHeader();

    [].forEach.call(students, function (item) {
        var student = new ItemView(item);

        student.displayStudent();
        student.addEvent();
    });
 }*/

 /*function StudentListView () {
    var students = new StudentList(),
    studentList = students.getStudentList();

    addHeader();

    this.displayStudentList = function () {
        [].forEach.call(studentList, function (item) {
            var student = new ItemView(item);

            student.displayStudent();
            student.addEvent();
        });
     }
 }*/