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
        }),

        inputRange_2 = new ConstrInputRange({
            input : document.querySelector('input[type="range"].input_1'),
            valueElement : document.querySelector('.value.one'),
            colorDefault : 'rgb(221,224,225)',
            colorSelect  : 'rgb(37,197,204)',
            min : 0,
            max : 400,
            step : 1,
            value : 200,
            content : '+'
        }),

        inputRange_3 = new ConstrInputRange({
            input : document.querySelector('input[type="range"].input_2'),
            valueElement : document.querySelector('.value.two'),
            colorDefault : 'rgb(221,224,225)',
            colorSelect  : 'rgb(37,197,204)',
            min : 0,
            max : 400,
            step : 1,
            value : 200,
            content : '+'
        }),

        inputRange_4 = new ConstrInputRange({
            input : document.querySelector('input[type="range"].input_3'),
            valueElement : document.querySelector('.value.three'),
            colorDefault : 'rgb(221,224,225)',
            colorSelect  : 'rgb(37,197,204)',
            min : 0,
            max : 400,
            step : 1,
            value : 200,
            content : '+'
        }),

        inputRange_4 = new ConstrInputRange({
            input : document.querySelector('input[type="range"].input_4'),
            valueElement : document.querySelector('.value.four'),
            colorDefault : 'rgb(221,224,225)',
            colorSelect  : 'rgb(37,197,204)',
            min : 0,
            max : 400,
            step : 1,
            value : 200,
            content : '+'
        }),

        inputRange_4 = new ConstrInputRange({
            input : document.querySelector('input[type="range"].input_5'),
            valueElement : document.querySelector('.value.five'),
            colorDefault : 'rgb(221,224,225)',
            colorSelect  : 'rgb(37,197,204)',
            min : 0,
            max : 400,
            step : 1,
            value : 200,
            content : '+'
        }),

        inputRange_4 = new ConstrInputRange({
            input : document.querySelector('input[type="range"].input_6'),
            valueElement : document.querySelector('.value.six'),
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