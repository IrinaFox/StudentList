'use strict';

function StudentListView (_students, _content) {
    var students = _students,
        listDiv = document.createElement('div');

    this.render = function () {
        students.forEach(function (item) {
            createStudent(item);
        });

        return listDiv;
    };

    this.renderHeader = function () {
        var containerDiv = document.createElement('div');

        containerDiv.innerHTML = headerStudentListTpl;
        containerDiv.classList.add('line');
        containerDiv.setAttribute('id', 'menu');

        return containerDiv;
    };
    
    this.display = function () {
		var header = this.renderHeader(),
			studentList = this.render(),
			f = document.createDocumentFragment();
		
       f.appendChild(header);
       f.appendChild(studentList);
	   
	   return f;	   
    };

    function createStudent (item) {
        var studentView = new ItemView(item),
            student = studentView.render();
            listDiv.appendChild(student);
    }
 }
