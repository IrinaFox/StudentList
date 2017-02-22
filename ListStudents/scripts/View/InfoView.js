'use strict';

//Create new window with more information. works only one time
function InfoView (_student, _container) {
    var infoDiv = document.createElement('div'),
        student = _student,
        container = _container,
        infoWindow;

    this.displayInfo = function () {
        var infoWindowList = document.querySelector('#infoWindowList'),
            stringElement = replacer(student, infoWindowTpl);

        infoDiv.innerHTML = stringElement;
        infoDiv.setAttribute('id', 'infoWindowList');
        infoDiv.classList.add('infoWindow');

        if (infoWindowList) {
            infoWindowList.parentNode.removeChild(infoWindowList);
            container.appendChild(infoDiv);
        }  else {
            container.appendChild(infoDiv);
        }

        animationShowList();
    };

    //Add animation to info-window - it makes the window brighter and bigger
    function animationShowList () {
        var infoWindow = document.querySelector('#infoWindowList'),
            buttonEdit = infoWindow.querySelector('input');

        infoWindow.addEventListener('mouseover', function () {
            infoWindow.classList.toggle('bright');
            infoWindow.classList.toggle('infoWindow');
        }, false);

        infoWindow.addEventListener('mouseout', function () {
            infoWindow.classList.toggle('bright');
            infoWindow.classList.toggle('infoWindow');
        }, false);

        buttonEdit.addEventListener('click', function () {
            infoWindow.parentNode.removeChild(infoWindow);
        }, false);
    }
}