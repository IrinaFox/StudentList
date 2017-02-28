'use strict';

function Implementation () {
    var info = document.querySelector('#additionalStudentList'),
        edit = document.querySelector('#additionalStudentList'),
        studentList = document.querySelector('#contentStudentList'),
        colorBlock = document.querySelector('#contentColorBlock');

    this.get = function (name) {
       var address;

       if (name == 'colorBlock') {
           address = colorBlock;
       } else if (name == 'info') {
           address = info;
       } else if (name == 'edit') {
           address = edit;
       } else if (name == 'studentList') {
           address = studentList;
       }

       return address;
    };

    return this;
}
