'use strict';

function ControllerCountryList () {
    var _countryList = document.querySelector('#countryList'),
        _countries = document.querySelector('#countries'),
        countries = new CountryList(),
        countryListView = new CountryListView(countries),
        countryList = countryListView.render('all'),
        countryHeader = countryListView.renderHeader(),
        buttonContinent = countryListView.renderButtonContinent();

    _countryList.appendChild(countryHeader);
    _countryList.appendChild(countryList);
    _countries.appendChild(buttonContinent);

    mediator.sub('CountryListCountryDeleted', function (country) {
        countries.removeCountry(country);
    });

    mediator.sub('continentChosen', function (name) {
        countryList = countryListView.render(name);
        _countryList.innerHTML = '';
        _countryList.appendChild(countryHeader);
        _countryList.appendChild(countryList);
    });

    return this;
}
