'use strict';

function ControllerCountryList () {
    var _countryList = document.querySelector('#countryList'),
        countries = new CountryList(),
        countryListView = new CountyListView(countries),
        countryList = countryListView.render(),
        countryHeader = countryListView.renderHeader();

    this.display = function    () {
        _countryList.appendChild(countryHeader);
        _countryList.appendChild(countryList);
    };

    this.display();

    return this;
}