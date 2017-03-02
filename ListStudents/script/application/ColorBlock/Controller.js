'use strict';

function ControllerColorBlock () {
    this.implementation = function (name) {
        var _colorBlock = document.querySelector('#contentColorBlock'),
            address = {
                colorBlock: _colorBlock
            };

        return address[name];
    };

    this.display = function () {
        var content = this.implementation,
            button = new ButtonView(content),
            counter = new CounterView(content),
            block = new BlockView(content);

        button.displayButton();
        block.displayBlock();
        counter.displayCounter();
    };

    this.display();
}