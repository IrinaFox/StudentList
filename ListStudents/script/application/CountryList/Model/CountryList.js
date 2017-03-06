'use strict';

function CountryList () {
    var countries = parserCountries(),
        i;

    this.forEach = function (fn) {
        countries.forEach(fn);
    };

    this.removeCountry =  function (country) {
        for (i=0; i<countries.length; i++) {
            if (countries[i].get('name') === country.get('name')) {
                var index = countries.indexOf(country);
                console.log(index);
                countries.splice(index, 1);
            }
        }
    };

    return this;
}
