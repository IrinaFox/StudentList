'use strict';

function ButtonView () {
    var content = document.querySelector('#contentColorBlock'),
        miniDiv = document.createElement('div'),
        colorCounter = new ColorCounter(),
        colors = colorCounter.toArray(),
        counter = new CounterView(),
        block =  new BlockView(),
        key;

    this.displayButton = function () {
        var stringElement = '';

        colors.forEach(function (color) {
            var newButton = buttonColorTpl.replace(/:color/g, color);

            stringElement += newButton;

            colorCounter.on(color, function () {
                block.changeBlock(color);
                counter.changeCounter(color);
            });
        });

        miniDiv.innerHTML += stringElement;

        miniDiv.classList.add('mainDiv');
        content.appendChild(miniDiv);

        addEvent();
    };

    function addEvent () {
        var buttons = miniDiv.querySelectorAll('input');

        [].forEach.call(buttons, function (button) {
            button.addEventListener('click', function () {
                var color = button.value;

                colorCounter.set(color);
            }, false);
        });
    }

    return this;
}