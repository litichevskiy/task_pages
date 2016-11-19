(function(exports){

    function PaymentMethod() {

        this.container = document.querySelector('.container_payment_method');
        this.closeElement = document.querySelector('.close_block_payment_method');

        var that = this;

        this.container.addEventListener('click', function( event ){
            if( event.target === that.container || event.target === that.closeElement ){
                closePaymentMethod.call( that );
            }
        });
    };

    PaymentMethod.prototype.on = function( htmlElement ) {

        this.blurLayer = new BlurLayer;
        this.blurLayer.on( htmlElement, this.container );
    };

    function closePaymentMethod(event) {

        this.blurLayer.off();
        this.blurLayer = null;
    };

    exports.PaymentMethod = PaymentMethod;

})( window );