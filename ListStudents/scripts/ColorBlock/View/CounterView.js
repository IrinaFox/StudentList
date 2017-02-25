'use strict';

function CounterView () {
    var content = document.getElementById('contentColorBlock'),
        containerDiv = document.createElement('div'),
        colorCounter = new ColorCounter(),
        colors = colorCounter.toJSON(),
        key;

    this.displayCounter = function () {
        var stringElement = '';

        for (key in colors) {
            var counter = key + ': ' + colors[key] + '<br>';

            stringElement += counter;
        }

        containerDiv.classList.add('mainDiv');
        containerDiv.innerHTML = stringElement;

        content.appendChild(containerDiv);
    };

    this.changeCounter = function (_color) {
        var counterDiv = document.querySelectorAll('.mainDiv')[2],
            stringCounter ='';

        counterDiv.innerHTML = '';
        containerDiv.innerHTML = '';

        colorCounter.increaseCounter(_color);
        colors = colorCounter.toJSON();

        for (key in colors) {
            stringCounter += key + ': ' + colors[key] + '<br>';
        }

        counterDiv.innerHTML = stringCounter;
    };

    return this;
}