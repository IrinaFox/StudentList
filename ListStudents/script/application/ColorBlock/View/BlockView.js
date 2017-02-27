'use strict';

function BlockView (_container) {
    var content = _container,
        containerDiv = document.createElement('div');

    this.displayBlock = function () {
        containerDiv.classList.add('mainDiv');
        containerDiv.innerHTML = blockTpL;
        content.appendChild(containerDiv);
    };

    this.changeBlock = function (_color) {
        var block = document.querySelector('#block'),
            color = _color;

        block.removeAttribute('class');
        block.classList.add(color);
    };

    return this;
}