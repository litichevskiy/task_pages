(function(exports){

    function PaymentMethod() {

        BlurLayer.call( this );

        this.container = document.querySelector('.container_payment_method');
        this.closeElement = document.querySelector('.close_block_payment_method');

        var that = this;

        this.container.addEventListener('click', function( event ){
            if( event.target === that.container || event.target === that.closeElement ){
                closePaymentMethod.call( that );
            }
        });
    };

    PaymentMethod.prototype = Object.create( BlurLayer.prototype );

    PaymentMethod.prototype.on = function( htmlElement ) {

        this.blurOn( htmlElement, this.container );
    };

    function closePaymentMethod(event) {

        this.blurOff();
    };

    exports.PaymentMethod = PaymentMethod;

})( window );