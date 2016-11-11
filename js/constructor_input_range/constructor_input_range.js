(function( exports ) {

    function ConstrInputRange( data ) {

        this.inputRange = data.input;
        this.valueElement = data.valueElement;

        this.inputRange.min = data.min;
        this.inputRange.max = data.max;
        this.inputRange.step = data.step;
        this.inputRange.value = data.value;

        var that = this,
            colorDefault = data.colorDefault,
            colorSelect = data.colorSelect,
            content = data.content,
            value = getValue( this.inputRange );

        this.changeProgres( value, colorSelect, colorDefault );
        this.valueElement.innerHTML = content + this.inputRange.value;

        this.inputRange.addEventListener('input',function( event ) {
            that.valueElement.innerHTML = content + event.target.value;
        });

        this.inputRange.addEventListener('input',function( event ) {

            value = getValue( this );
            that.changeProgres( value, colorSelect, colorDefault );
        });
    }

    ConstrInputRange.prototype.changeProgres = function( val, colorSelect, colorDefault ) {

        this.inputRange.style.backgroundImage = '-webkit-gradient('+
            'linear, left top, right top,'+
            'color-stop('+val+', '+colorSelect+' ),'  +
            'color-stop('+val+', '+colorDefault+')'+
        ')'
    };

    function getValue( input ) {
        return ( ( input.value - input.min ) / ( input.max - input.min ) );
    };

    exports.ConstrInputRange = ConstrInputRange;

})( window );