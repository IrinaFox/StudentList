//For one line with datas of student
function createStudent (fullForm) {
    var buttonName = fullForm['skype'],
        content = document.getElementById('content'),
        moreButton;

    replacer(fullForm, itemTpl, content);

    moreButton = (document.getElementsByName(buttonName))[0];

    moreButton.addEventListener('click', function () {
        var infoWindowList = document.getElementById('infoWindowList');

        if (infoWindowList) {
            infoWindowList.parentNode.removeChild(infoWindowList);
            displayMoreInfo(fullForm);
        } else {
            displayMoreInfo(fullForm);
        }
    }, false);
}
