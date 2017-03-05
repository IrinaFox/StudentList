'use strict';

function CountryView (_country) {
    var containerDiv = document.createElement('div'),
        country = _country,
        buttonDislike,
        buttonDelete,
        buttonLike;

    this.render = function () {
        var stringElement = replacer(country, countryTpl);

        containerDiv.innerHTML = stringElement;
        containerDiv.classList.add('lineCountry');

        addEvents();


        return containerDiv;
    };

    function addEvents () {
        var buttons = containerDiv.querySelectorAll('input');

        buttonLike = buttons[0];
        buttonDislike = buttons[1];
        buttonDelete = buttons[2];

        eventToButtonDislike();
        eventToButtonLike();
    }

    function eventToButtonDislike () {
        buttonDislike.addEventListener('click', hidCountry, false);
    }

    function eventToButtonLike () {
        buttonLike.addEventListener('click', brightCountry, false);
    }

    function eventToButtonDelete () {
        buttonLike.addEventListener('click', deleteCountry, false);
    }

    function hidCountry () {
        containerDiv.parentNode.removeChild(containerDiv);
        buttonDislike.removeEventListener('click', hidCountry);
        buttonLike.removeEventListener('click', brightCountry);
        buttonLike.removeEventListener('click', deleteCountry);
    }

    function brightCountry () {
        console.log('clicked');
        containerDiv.classList.add('brightCountry')
    }

    function deleteCountry () {

        buttonDislike.removeEventListener('click', hidCountry);
        buttonLike.removeEventListener('click', brightCountry);
        buttonLike.removeEventListener('click', deleteCountry);
    }

    return this;
}