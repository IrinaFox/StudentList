'use strict';

function BlockView (_content) {
    var content = _content('colorBlock'),
        containerDiv = document.createElement('div');

    this.displayBlock = function () {
        containerDiv.classList.add('mainDiv');
        containerDiv.innerHTML = blockTpL;
        content.appendChild(containerDiv);
    };

    mediator.sub('changeBlock',function (_color) {
        var block = document.querySelector('#block'),
            color = _color;

        block.removeAttribute('class');
        block.classList.add(color);
    });

    return this;
}