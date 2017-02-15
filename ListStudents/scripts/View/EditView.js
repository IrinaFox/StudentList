function editView (_student) {
    var student = _student,
        containerDiv = document.createElement('div'),
        string = replacer(student, editWindowTpl);

    containerDiv.innerHTML = string;

    document.body.appendChild(containerDiv);
}