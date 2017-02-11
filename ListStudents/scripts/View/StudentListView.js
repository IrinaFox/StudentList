StudentList.prototype.displayStudentList = function () {
    addHeader();

    [].forEach.call(this.students, function (item) {
        var fullForm = item.toJSON();

        createStudent(fullForm);
    });
};

//Adding header
function addHeader () {
    var content = document.getElementById('content');
    content.innerHTML += headerTpl;
}