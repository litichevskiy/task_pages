(function(){

    window.onload = function(){

        var inputRange_1 = new ConstrInputRange({
            input : document.querySelector('.more_followers  input[type="range"]'),
            valueElement : document.querySelector('.counter_more_followers'),
            colorDefault : 'rgb(221,224,225)',
            colorSelect  : 'rgb(37,197,204)',
            min : 0,
            max : 400,
            step : 1,
            value : 200,
            content : '+'
        });

        var list = document.querySelectorAll('.container_select_likes_comments');

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
    }

})();