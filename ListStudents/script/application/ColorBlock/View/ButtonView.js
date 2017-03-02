'use strict';

function ButtonView (_content) {
    var content = _content('colorBlock'),
        miniDiv = document.createElement('div'),
        colorCounter = new ColorCounter(),
        colors = colorCounter.toArray();

    content.appendChild(miniDiv);
    miniDiv.classList.add('mainDiv');

    this.displayButton = function () {
        colors.forEach(function (color) {
            var buttonDiv = document.createElement('div'),
                stringButton = buttonColorTpl.replace(/:color/g, color),
                button;

            buttonDiv.innerHTML = stringButton;
            miniDiv.appendChild(buttonDiv);

            button = buttonDiv.querySelector('input');

            button.addEventListener('click', changeCounter, false);
            button.addEventListener('click', changeBlock, false);

            function changeCounter () {
                mediator.pub('changeCounter', color);
            }

            function changeBlock () {
                mediator.pub('changeBlock', color);
            }
        });
    };

    return this;
}