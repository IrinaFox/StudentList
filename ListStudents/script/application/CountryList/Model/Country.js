'use strict';

function Country (_name, _population, _area, _continent) {
    var values = {
        name: _name,
        area: _area,
        population: _population,
        continent: _continent
    };

    this.toJSON = function () {
        var JSON = {},
            key;

        for (key in values) {
            JSON[key] = values[key];
        }

        return JSON;
    };

    this.get = function (_key) {
        return values[_key];
    };

    this.set = function (_key, _value) {
        var key = _key,
            value = _value,
            firstKey = values[key];

        values[key] = value;
    };

    return this;
}

Country.prototype = new Mediator();