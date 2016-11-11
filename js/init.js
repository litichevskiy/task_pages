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
    }

})();