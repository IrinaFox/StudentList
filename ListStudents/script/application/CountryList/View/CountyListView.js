'use strict';

var CountryListView = (function () {
    var continents;

    function CountyListViewInsert (_countries) {
        var countries = _countries;

        this.render = function (name) {
            var listDiv = document.createElement('div'),
                countries;

            creating();
            countries = continents[name];

            countries.forEach(function (item) {
                listDiv.appendChild(item);
            });

            return listDiv;
        };

        function creating() {
            continents = {
                australia: [],
                america: [],
                europa: [],
                africa: [],
                asia: [],
                all: []
            };
            countries.forEach(function (country) {
                createCountry(country);
            });
        }

        return this;
    }

    function createCountry(item) {
        var countryView = new CountryView(item),
            country = countryView.render(),
            continent = item.get('continent');

        continents[continent].push(country);
        continents['all'].push(country);
    }

    CountyListViewInsert.prototype = new View;

    CountyListViewInsert.prototype.renderHeader = function () {
        var containerDiv = document.createElement('div');

        containerDiv.innerHTML = headerCountryListTpl;
        containerDiv.classList.add('line');
        containerDiv.setAttribute('id', 'menu');

        return containerDiv;
    };

    CountyListViewInsert.prototype.renderButtonContinent = function () {
        var containerDiv = document.createElement('div'),
            buttons;

        containerDiv.innerHTML = buttonContinentTpl;
        containerDiv.classList.add('containerButtonContinent');

        buttons = containerDiv.querySelectorAll('input');
        buttons[0].addEventListener('click', addEventAsia, false);
        buttons[1].addEventListener('click', addEventEuropa, false);
        buttons[2].addEventListener('click', addEventAfrica, false);
        buttons[3].addEventListener('click', addEventAmerica, false);
        buttons[4].addEventListener('click', addEventAustralia, false);
        buttons[5].addEventListener('click', addEventAll, false);

        function addEventAsia() {
            mediator.pub('continentChosen', 'asia');
        }
        function addEventEuropa() {
            mediator.pub('continentChosen', 'europa');
        }
        function addEventAmerica() {
            mediator.pub('continentChosen', 'america');
        }
        function addEventAfrica() {
            mediator.pub('continentChosen', 'africa');
        }
        function addEventAustralia() {
            mediator.pub('continentChosen', 'australia');
        }
        function addEventAll() {
            mediator.pub('continentChosen', 'all');
        }

        return containerDiv;
    };

    return CountyListViewInsert;
})();