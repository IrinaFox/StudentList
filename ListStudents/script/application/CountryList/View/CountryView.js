'use strict';

function CountryView (_country){
    var containerDiv = document.createElement('div'),
        country = _country,
        buttonDislike,
        buttonDelete,
        buttonLike;

    /*this.render = function () {
        var stringElement = replacer(country, countryTpl);

        containerDiv.innerHTML = stringElement;
        containerDiv.classList.add('lineCountry');

        addEvents();

        return containerDiv;
    }; */

    this.render = function () {
        return this.renderElement(containerDiv, country, countryTpl, 'lineCountry', addEvents);
    };


    function eventToButtonLike () {
        containerDiv.classList.add('brightCountry')
    }

    function eventToButtonDislike () {
        containerDiv.parentNode.removeChild(containerDiv);
        buttonDislike.removeEventListener('click', eventToButtonDislike);
        buttonLike.removeEventListener('click', eventToButtonDelete);
        buttonLike.removeEventListener('click', eventToButtonDelete);
    }

    function eventToButtonDelete () {
        eventToButtonDislike();
        mediator.pub('CountryListCountryDeleted', country);
    }

    function addEvents () {
        var buttons = containerDiv.querySelectorAll('input');

        buttonLike = buttons[0];
        buttonDislike = buttons[1];
        buttonDelete = buttons[2];

        buttonDislike.addEventListener('click', eventToButtonDislike, false);
        buttonLike.addEventListener('click', eventToButtonLike, false);
        buttonDelete.addEventListener('click', eventToButtonDelete, false);
    }

    return this;
}

CountryView.prototype = new View();