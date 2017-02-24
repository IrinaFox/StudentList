'use strict';

//Create new window with more information. works only one time
function InfoView () {
    var infoDiv = document.createElement('div');

    mediator.sub('infoChange', function (student) {
         var stringElement = replacer(student, infoWindowTpl),
             infoWindowList = document.querySelector('#infoWindowList');

        infoDiv.setAttribute('id', 'infoWindowList');
        infoDiv.classList.add('infoWindow');

        infoDiv.innerHTML = stringElement;

        if (infoWindowList) {
            infoDiv.parentNode.removeChild(infoDiv);
        }

        document.body.appendChild(infoDiv);

        eventToButtonClose();
    });

    function eventToButtonClose () {
        var buttonClose = infoDiv.querySelector('input');

        buttonClose.addEventListener('click', function () {
            infoDiv.parentNode.removeChild(infoDiv);
        }, false);
    }
}