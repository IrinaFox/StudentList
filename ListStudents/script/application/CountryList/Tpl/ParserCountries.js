'use strict';

function parserCountries () {
    var countriesListCSV = countriesTpl.split(/\r?\n/),
        countryList = [];

    countriesListCSV.forEach(function (country) {
        var countryData = country.split('	'),
            countryName = countryData[0],
            continent = countryData[1],
            population = countryData[2],
            area = countryData[3],
            newCountry = new Country(countryName, population, area, continent);

        countryList.push(newCountry);
    });

    return countryList;
}