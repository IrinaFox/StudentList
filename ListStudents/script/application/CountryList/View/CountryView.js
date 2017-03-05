'use strict';

function CountryView (_country) {
    var containerDiv = document.createElement('div'),
        country = _country;

    this.render = function () {
        var stringElement = replacer(country, countryTpl);

        containerDiv.innerHTML = stringElement;
        containerDiv.classList.add('line');

        return containerDiv;
    };
}