'use strict';

//Create countries list
function parserCountries () {
    var countriesListCSV = countriesSCV.split(/\r?\n/),
        regions = parserContinents(),
        countryList = [];

    countriesListCSV.forEach(function (country) {
        var countryData = country.split('	'),
            countryName = countryData[0],
            region = countryData[1],
            population = countryData[2],
            area = countryData[3],
            continent,
            newCountry;

        if (region === regions[0] || region === regions[7] || region === regions[8]) {
            continent = 'Asia';
        } else if (region === regions[1] || region === regions[4] || region === regions[10]) {
            continent = 'Europa';
        } else if (region === regions[2] || region === regions[5]) {
            continent = 'Africa';
        } else if (region === regions[3]) {
            continent = 'Australia';
        } else if (region === regions[6] || region === regions[9]) {
            continent = 'America';
        }

        newCountry = new Country(countryName, population, area, continent);
        countryList.push(newCountry);
    });

    return countryList;
}

//Find unique regions
function parserContinents () {
    var continents = countriesSCV.split(/\r?\n/),
        uniqueContinents =[],
        i;

    continents.forEach(function (continent) {
        var region = continent.split('	')[1];

        if (uniqueContinents.length === 0) {
            uniqueContinents.push(region);
        } else {
            for (i = 0; i < uniqueContinents.length; i++) {
                if (region === uniqueContinents[i]) {
                    break;
                }
                if (i === (uniqueContinents.length - 1)) {
                    uniqueContinents.push(region);
                }
            }
        }
    });

    return uniqueContinents;
}