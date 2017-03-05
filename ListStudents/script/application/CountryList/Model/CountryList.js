'use strict';

function CountryList () {
    var countries = parserCountries();

    this.forEach = function (fn) {
        countries.forEach(fn);
    };

    return this;
}
