(function( exports ){

    function BlurLayer() {};

    BlurLayer.prototype.on = function( blurElement, showElement ) {
        this.blurElement = blurElement;
        this.showElement = showElement;

        this.blurElement.classList.add('blur');
        this.showElement.style.display = 'inline-block';
        document.body.style.overflow = 'hidden';
    };

    BlurLayer.prototype.off = function( blurElement ) {

        this.blurElement.classList.remove('blur');
        this.showElement.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    exports.BlurLayer = BlurLayer;

})( window );