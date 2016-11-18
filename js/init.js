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
                    max : 400,
                    step : 1,
                    value : 200,
                    content : '+'
                });
            }
        });

        // var waitElement = new WaitElement;

    //     setTimeout(function(){
    //         waitElement.off();
    //     }, 3000 );
    }



})();