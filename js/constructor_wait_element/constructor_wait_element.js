(function(exports){

    function WaitElement() {

        this.container = document.createElement('div');
        this.container.classList.add('container_wait_element');

        var loadingElem = document.createElement('div'),
            loading = document.createElement('div'),
            pointOne = document.createElement('span'),
            pointTwo = document.createElement('span'),
            pointThree = document.createElement('span');

        loadingElem.classList.add('container_loading');
        pointOne.classList.add('point');
        pointTwo.classList.add('point');
        pointThree.classList.add('point');
        loading.classList.add('loading');

        loading.innerHTML = 'loading';

        loadingElem.appendChild(loading);
        loadingElem.appendChild(pointOne);
        loadingElem.appendChild(pointTwo);
        loadingElem.appendChild(pointThree);

        this.container.appendChild(loadingElem);

        document.body.appendChild(this.container);
        document.body.style.overflow = 'hidden';
    };

    WaitElement.prototype.off = function(){

        document.body.style.overflow = 'auto';
        document.body.removeChild(this.container);
    };

    exports.WaitElement = WaitElement;

})(window);