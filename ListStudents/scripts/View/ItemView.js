'use strict';

//For one line with datas of student
function ItemView (_student) {
    var content = document.getElementById('content'),
        containerDiv = document.createElement('div'),
        student = _student,
        stringElement = replacer(student, itemTpl),
        moreButton,
        editButton;

    this.displayStudent = function () {
        containerDiv.innerHTML = stringElement;
        containerDiv.setAttribute('class', 'line');

        content.appendChild(containerDiv);
    };

    this.addEvent = function () {
        moreButton = containerDiv.getElementsByTagName('input')[0];
        editButton = containerDiv.getElementsByTagName('input')[1];

        moreButton.addEventListener('click', showInfo, false);
        editButton.addEventListener('click', function () {
            editView(student);
        }, false);
    };



    function showInfo () {
        var infoWindowList = document.getElementById('infoWindowList'),
            info = new InfoView(student);

        if (infoWindowList) {
            infoWindowList.parentNode.removeChild(infoWindowList);

            info.displayInfo();
            info.addAnimation();
        } else {
            info.displayInfo();
            info.addAnimation();
        }
    }
}