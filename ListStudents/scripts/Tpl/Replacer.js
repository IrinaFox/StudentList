function replacer (fullForm, tpl, parent) {
    var containerDiv = document.createElement('div'),
        newTpl = tpl,
        key;

    for (key in fullForm) {
        newTpl = newTpl.replace(new RegExp(':' + key, 'g'), fullForm[key]);
    }

    containerDiv.setAttribute('class', 'generalInfoWindow');
    containerDiv.innerHTML = newTpl;

    parent.appendChild(containerDiv);
}
