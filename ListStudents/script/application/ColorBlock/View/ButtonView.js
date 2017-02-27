'use strict';

function ButtonView (_container) {
    var content = _container,
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

            colorCounter.sub(color, function () {
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