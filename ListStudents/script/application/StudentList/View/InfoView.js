'use strict';

//Create new window with more information. works only one time
function InfoView (_content) {
    var infoDiv = document.createElement('div'),
        buttonClose;

    mediator.sub('infoChange', function (student) {
         var stringElement = replacer(student, infoWindowTpl),
             infoWindowList = document.querySelector('#infoWindowList'),
             content = _content('info');

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
        buttonClose = infoDiv.querySelector('input');
        buttonClose.addEventListener('click', removeInfoDiv, false);
    }

    function removeInfoDiv () {
        infoDiv.parentNode.removeChild(infoDiv);
        buttonClose.removeEventListener('click', removeInfoDiv);
    }
}