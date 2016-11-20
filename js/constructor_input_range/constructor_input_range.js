(function( exports ) {

    function ConstrInputRange( data ) {

        this.inputRange = data.input;
        this.valueElement = data.valueElement;

        this.inputRange.min = data.min;
        this.inputRange.max = data.max;
        this.inputRange.step = data.step;
        this.inputRange.value = data.currentValue;
        this.steps =  data.steps;
        this.cashValue = data.currentValue;

        var that = this,
            colorDefault = data.colorDefault,
            colorSelect = data.colorSelect,
            content = data.content,
            value = this.getValue( this.inputRange );

        this.changeProgres( value, colorSelect, colorDefault );
        this.valueElement.innerHTML = content + this.inputRange.value;

        this.inputRange.addEventListener('input',function( event ) {

            that.valueElement.innerHTML = content + event.target.value;
        });

        this.inputRange.addEventListener('input',function( event ) {

            value = that.getValue( this );
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

    ConstrInputRange.prototype.getValue = function( input ) {

        if( this.steps ) {

            var value = +input.value;

            if( value > this.cashValue )
                this.cashValue = value, increaseValue.call(this, value);
                else if( input.value < this.cashValue )
                    this.cashValue = value, decreaseValue.call(this, value);
        }

        return ( ( input.value - input.min ) / ( input.max - input.min ) );
    };

    function increaseValue( val ) {

        for( var i = 0; i < this.steps.length; i++ ){

            if( val > this.steps[i].min && val < this.steps[i].max ){
                console.log( 'max---',this.steps[i], 'val',val )
                this.inputRange.step = this.steps[i].step;
                return;
            }
        }

    };

    function decreaseValue( val ) {
        console.log('MIN')
        for( var i = 0; i < this.steps.length; i++ ){

            if( val > this.steps[i].min && val < this.steps[i].max ){
                console.log( 'min---',this.steps[i], 'val',val )
                this.inputRange.step = this.steps[i].step;
                return;
            }
        }
    };

    exports.ConstrInputRange = ConstrInputRange;

})( window );