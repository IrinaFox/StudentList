'use strict';

//Create new window with more information. works only one time
function InfoView (_student) {
    var infoDiv = document.createElement('div'),
        stringElement = replacer(_student, infoWindowTpl),
        infoWindow;

    this.displayInfo = function () {
        infoDiv.innerHTML = stringElement;
        infoDiv.setAttribute('id', 'infoWindowList');
        infoDiv.setAttribute('class', 'infoWindow');

        document.body.appendChild(infoDiv);
    };

    this.addAnimation = function () {
        infoWindow = document.getElementById('infoWindowList');
        animationShowList(infoWindow);
    };

    //Add animation to info-window - it makes the window brighter and bigger
    function animationShowList (neededElement) {
        var buttonEdit = neededElement.getElementsByTagName('input')[0];

        neededElement.addEventListener('mouseover', function () {
            neededElement.removeAttribute('class');
            neededElement.setAttribute('class','bright');
        }, false);

        neededElement.addEventListener('mouseout', function () {
            neededElement.removeAttribute('class');
            neededElement.setAttribute('class','infoWindow');
        }, false);

        buttonEdit.addEventListener('click', function () {
            neededElement.parentNode.removeChild(neededElement);
        }, false);
    }
}