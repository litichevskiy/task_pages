// (function( exports ) {

//     function ConstrInputRange( data ) {

//         this.inputRange = data.input;
//         this.valueElement = data.valueElement;

//         this.inputRange.min = data.min;
//         this.inputRange.max = data.max;
//         this.inputRange.step = data.step;
//         this.inputRange.value = data.value;

//         this.max = data.maxNumber;
//         this.content = data.content;

//         var that = this,
//             colorDefault = data.colorDefault,
//             colorSelect = data.colorSelect,
//             value = getValue( this.inputRange );

//         this.changeProgres( value, colorSelect, colorDefault );
//         this.valueElement.value = this.content + this.inputRange.value;

//         this.valueElement.addEventListener('input', function(event){

//             if( isNaN( +event.target.value ) ){

//                 var newVal = event.target.value.replace( /\D/g, '');
//                 that.valueElement.value = newVal;
//                 return;
//             }

//             if( +event.target.value > that.max ){

//                 that.valueElement.value = that.max;
//                 that.inputRange.value = that.max;
//                 value = getValue( that.inputRange );
//                 that.changeProgres( value, colorSelect, colorDefault );
//                 return;
//             }

//             var val = that.valueElement.value;
//             that.inputRange.value = +val;
//             value = getValue( that.inputRange );
//             that.changeProgres( value, colorSelect, colorDefault );
//         });

//         this.inputRange.addEventListener('input',function( event ) {
//             that.valueElement.value = that.content + event.target.value;
//         });

//         this.inputRange.addEventListener('input',function( event ) {
//             value = getValue( this );
//             that.changeProgres( value, colorSelect, colorDefault );
//         });

//         this.valueElement.addEventListener('blur',function( event ) {
//             this.value = '+' + +this.value;
//         });
//     }

//     ConstrInputRange.prototype.changeProgres = function( val, colorSelect, colorDefault ) {

//         this.inputRange.style.backgroundImage = '-webkit-gradient('+
//             'linear, left top, right top,'+
//             'color-stop('+val+', '+colorSelect+' ),'  +
//             'color-stop('+val+', '+colorDefault+')'+
//         ')'
//     };

//     function getValue( input ) {
//         return ( ( input.value - input.min ) / ( input.max - input.min ) );
//     };

//     exports.ConstrInputRange = ConstrInputRange;

// })( window );

////////////////////////////////////////////////////////////////////////////////////////////////////

// (function( exports ) {

//     function ConstrInputRange( data ) {

//         this.inputRange = data.input;
//         this.valueElement = data.valueElement;

//         this.inputRange.min = data.min;
//         this.inputRange.max = data.max;
//         this.inputRange.step = data.step;
//         this.inputRange.value = data.currentValue;
//         this.steps =  data.steps;
//         this.ranges = data.ranges;
//         this.max = data.maxNumber;

//         var that = this,
//             colorDefault = data.colorDefault,
//             colorSelect = data.colorSelect;
//         this.content = data.content;
//         this.setValue(this.valueElement);
//         this.changeProgres( this.inputRange.value, colorSelect, colorDefault );
//         // this.valueElement.value = this.content + this.inputRange.value;

//         this.inputRange.addEventListener('input',function( event ) {
//             that.setValue(that.valueElement);
//         });

//         this.valueElement.addEventListener('change', function(event){
//             that.toPercent(that.inputRange, this.value);
//             that.changeProgres( that.inputRange.value, colorSelect, colorDefault );
//         });

//         this.inputRange.addEventListener('input',function( event ) {
//             that.changeProgres( this.value, colorSelect, colorDefault );
//         });

//         this.valueElement.addEventListener('blur',function( event ) {
//             this.value = '+' + +this.value;
//         });

//         this.valueElement.addEventListener('input', function(event){

//             if( isNaN( +event.target.value ) ){

//                 var newVal = event.target.value.replace( /\D/g, '');
//                 that.valueElement.value = newVal;
//                 return;
//             }

//             if( +event.target.value > that.max ){

//                 that.valueElement.value = that.max;
//                 that.inputRange.value = that.max;
//                 value = that.getValue( that.inputRange );
//                 that.changeProgres( value, colorSelect, colorDefault );
//                 return;
//             }

//             var val = that.valueElement.value;
//             that.inputRange.value = +val;
//             value = that.getValue( that.inputRange );
//             that.changeProgres( value, colorSelect, colorDefault );
//         });
//     }

//     ConstrInputRange.prototype.setValue = function(vE){
//         if(vE.tagName == 'INPUT')
//             vE.value = this.content + this.getValue(this.inputRange);
//         else
//             vE.innerHTML = this.content + this.getValue(this.inputRange);
//     };

//     ConstrInputRange.prototype.changeProgres = function( val, colorSelect, colorDefault ) {
//         val = val / 100;
//         this.inputRange.style.backgroundImage = '-webkit-gradient('+
//             'linear, left top, right top,'+
//             'color-stop('+val+', '+colorSelect+' ),'  +
//             'color-stop('+val+', '+colorDefault+')'+
//         ')'
//     };

//     ConstrInputRange.prototype.findrange = function(value, ranges){
//         var rng = null;
//         var i = ranges.length - 1;
//         while(i >= 0 && value <= ranges[i].max){
//             rng = ranges[i];
//             i--;
//         }
//         return rng;
//     };

//     ConstrInputRange.prototype.getValue = function(rangeInput) {
//         var rng = this.findrange(rangeInput.value, this.ranges);
//         if(rangeInput.value > 0 && rangeInput.value < 100){
//             var minp = rng.min;
//             var maxp = rng.max;
//             var minv = Math.log(rng.vmin > 0 ? rng.vmin : 1);
//             var maxv = Math.log(rng.vmax);

//             var scale = (maxv-minv) / (maxp-minp);

//             return Math.ceil(Math.exp(minv + scale*(rangeInput.value-minp)));
//         }
//         else if(rangeInput.value == 100)
//             return rng.vmax;
//         else
//             return 0;

//     };

//     ConstrInputRange.prototype.toPercent = function(rangeInput, value) {
//         rangeInput.value = 0;
//         value = parseInt(value);
//         while(this.getValue(rangeInput) <= value)
//             rangeInput.value = parseInt(rangeInput.value) + 1;
//     };

//     exports.ConstrInputRange = ConstrInputRange;

// })( window );

////////////////////////////////////////////////////////////////////////////////////

(function( exports ) {

    function ConstrInputRange( data ) {

        this.inputRange = data.input;
        this.valueElement = data.valueElement;

        this.inputRange.min = data.min;
        this.inputRange.max = data.max;
        this.inputRange.step = data.step;
        this.inputRange.value = data.currentValue;
        this.steps =  data.steps;
        this.ranges = data.ranges;
        this.max = data.maxNumber;

        var that = this,
            colorDefault = data.colorDefault,
            colorSelect = data.colorSelect;
        this.content = data.content;

        this.setValue(this.valueElement);
        this.changeProgres( this.inputRange.value, colorSelect, colorDefault );
        this.valueElement.innerHTML = this.content + this.inputRange.value;

        this.inputRange.addEventListener('input',function( event ) {
            that.setValue(that.valueElement);
        });

        this.valueElement.addEventListener('change', function(event){
            that.toPercent(that.inputRange, this.value, {min: 0, max: 100});
            that.changeProgres( that.inputRange.value, colorSelect, colorDefault );
        });

        this.inputRange.addEventListener('input',function( event ) {
            that.changeProgres( this.value, colorSelect, colorDefault );
        });

        this.valueElement.addEventListener('blur',function( event ) {
            this.value = '+' + +this.value;
        });

        this.valueElement.addEventListener('input', function(event){

            if( isNaN( +event.target.value ) ){

                var newVal = event.target.value.replace( /\D/g, '');
                that.valueElement.value = newVal;
                return;
            }

            if( +event.target.value > that.max ){

                that.valueElement.value = that.max;
                that.inputRange.value = that.max;
                value = that.getValue( that.inputRange );
                that.changeProgres( value, colorSelect, colorDefault );
                return;
            }

            var val = that.valueElement.value;
            that.inputRange.value = +val;
            value = that.getValue( that.inputRange );
            that.changeProgres( value, colorSelect, colorDefault );
        });
    }

    ConstrInputRange.prototype.setValue = function(vE){
        if(vE.tagName == 'INPUT') {

            vE.value = this.content + this.getValue(this.inputRange);
        }
        else {

            vE.innerHTML = this.content + this.getValue(this.inputRange);
        }
    };

    ConstrInputRange.prototype.changeProgres = function( val, colorSelect, colorDefault ) {
        val = val / 100;
        this.inputRange.style.backgroundImage = '-webkit-gradient('+
            'linear, left top, right top,'+
            'color-stop('+val+', '+colorSelect+' ),'  +
            'color-stop('+val+', '+colorDefault+')'+
        ')'
    };

    ConstrInputRange.prototype.findrange = function(value, ranges){
        var rng = null;
        var i = ranges.length - 1;
        while(i >= 0 && value <= ranges[i].max){
            rng = ranges[i];
            i--;
        }
        return rng;
    };

    ConstrInputRange.prototype.getValue = function(rangeInput) {
        var rng = this.findrange(rangeInput.value, this.ranges);
        if(rangeInput.value > 0 && rangeInput.value < 100){
            var minp = rng.min;
            var maxp = rng.max;
            var minv = Math.log(rng.vmin > 0 ? rng.vmin : 1);
            var maxv = Math.log(rng.vmax);

            var scale = (maxv-minv) / (maxp-minp);
            var result = Math.ceil(Math.exp(minv + scale*(rangeInput.value-minp)));
            if(result > 1000)
                return Math.round(result/50)*50;
            else
                return Math.round(result/5)*5;

        }
        else if(rangeInput.value == 100)
            return rng.vmax;
        else
            return 0;

    };

    ConstrInputRange.prototype.toPercent = function(rangeInput, value, range) {
        value = parseInt(value);

        var temp;
        var mid = range.min + parseInt((range.max - range.min) / 2);
        rangeInput.value = mid;
        temp = this.getValue(rangeInput);
        if((temp == value) || range.max - range.min < 3)
            return mid;
        else if(value < temp)
            return this.toPercent(rangeInput, value, {min: range.min, max: mid});
        else
            return this.toPercent(rangeInput, value, {min: mid, max: range.max});

    };

    exports.ConstrInputRange = ConstrInputRange;

})( window );