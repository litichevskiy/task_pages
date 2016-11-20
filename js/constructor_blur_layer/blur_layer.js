(function( exports ){

    function BlurLayer() {};

    BlurLayer.prototype.blurOn = function( blurElement, showElement ) {
        this.blurElement = blurElement;
        this.showElement = showElement;

        this.blurElement.classList.add('blur');
        this.showElement.style.display = 'inline-block';
        document.body.style.overflow = 'hidden';
    };

    BlurLayer.prototype.blurOff = function( blurElement ) {

        this.blurElement.classList.remove('blur');
        this.showElement.style.display = 'none';
        document.body.style.overflow = 'auto';

        delete this.blurElement;
        delete this.showElement;
    };

    exports.BlurLayer = BlurLayer;

})( window );