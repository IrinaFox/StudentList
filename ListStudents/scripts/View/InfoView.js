//Create new window with more information. works only one time
function displayMoreInfo (fullForm) {
    var parent = document.body,
        infoWindow;

    replacer(fullForm, infoWindowTpl, parent);

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

