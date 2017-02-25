'use strict';

//Create new window with more information. works only one time
function InfoView () {
    var infoDiv = document.createElement('div');

    mediator.sub('infoChange', function (student) {
         var stringElement = replacer(student, infoWindowTpl),
             infoWindowList = document.querySelector('#infoWindowList'),
             content = document.querySelector('#additionalStudentList');

        infoDiv.setAttribute('id', 'infoWindowList');
        infoDiv.classList.add('infoWindow');

        infoDiv.innerHTML = stringElement;

        if (infoWindowList) {
            infoWindowList.parentNode.removeChild(infoWindowList);
        }

        content.appendChild(infoDiv);

        eventToButtonClose();
    });

    function eventToButtonClose () {
        var buttonClose = infoDiv.querySelector('input');

        buttonClose.addEventListener('click', function () {
            infoDiv.parentNode.removeChild(infoDiv);
        }, false);
    }
}