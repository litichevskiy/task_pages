(function(){

    window.onload = function(){

        var list = document.querySelectorAll('.container_input_range');

        list.forEach = [].forEach;

        list.forEach(function( item ){

            var inputs = item.querySelectorAll('input[type="range"]'),
                valueElements = item.querySelectorAll('.value'),
                temp;

            for ( var i = 0; i < inputs.length; i++ ){

                temp = new ConstrInputRange({

                    input : inputs[i],
                    valueElement : valueElements[i],
                    colorDefault : 'rgb(221,224,225)',
                    colorSelect  : 'rgb(37,197,204)',
                    min : 0,
                    max : 500000,
                    step : 1,
                    currentValue : 200,
                    content : '+',
                    steps : [
                        {min : 0, max:250000, step: 1000},{min:250000, max:500000, step: 10000},
                    ]
                });
            }
        });

        // var blurLayer = new BlurLayer;

        //     blurLayer.blurOn(
        //         document.querySelector('.container_user_page'),
        //         document.querySelector('.container_wait_element')
        //     );

        // setTimeout(function(){

        //     blurLayer.blurOff();

        // }, 2000 );

        // setTimeout(function(){

        //     var pay = new PaymentMethod;

        //     pay.on(document.querySelector('.container_user_page'));

        // }, 0 );
    }



})();