'use strict';

function CountyListView (_countries) {
    var countries = _countries,
        listDiv = document.createElement('div');

    this.render = function () {
        countries.forEach(function (country) {
            createCountry(country);
        });

        return listDiv;
    };

    this.renderHeader = function () {
        var containerDiv = document.createElement('div');

        containerDiv.innerHTML = headerCountryListTpl;
        containerDiv.classList.add('line');
        containerDiv.setAttribute('id', 'menu');

        return containerDiv;
    };

    function createCountry (item) {
        var countryView = new CountryView(item),
            country = countryView.render();
        listDiv.appendChild(country);
    }
}