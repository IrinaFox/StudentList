//Create new window with more information. works only one time
function displayMoreInfo (fullForm) {
    var infoDiv = document.createElement('div'),
        infoWindow;

    replacer(fullForm, infoWindowTpl, infoDiv);
    document.body.appendChild(infoDiv);

    infoDiv.setAttribute('id', 'infoWindowList');
    infoDiv.setAttribute('class', 'infoWindow');

    infoWindow = document.getElementById('infoWindowList');
    animationShowList(infoWindow);
}

//Add animation to info-window - it makes the window brighter and bigger
function animationShowList (neededElement) {
    neededElement.addEventListener('mouseover', function () {
        neededElement.removeAttribute('class');
        neededElement.setAttribute('class','bright');
    }, false);

    neededElement.addEventListener('mouseout', function () {
        neededElement.removeAttribute('class');
        neededElement.setAttribute('class','infoWindow');
    }, false);

    neededElement.addEventListener('click', function () {
        neededElement.parentNode.removeChild(neededElement);
    }, false);
}