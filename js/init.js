(function(){

    window.onload = function(){

        var labelList = document.querySelectorAll('.data_role_label');

        for( var i = 0; i < labelList.length; i++ ) {

            labelList[i].addEventListener('click',function(event) {
                if( event.target.tagName === 'INPUT' ) return;
                this.classList.toggle('label_active');
                var input = this.querySelector('.input_container_settings');
                input.checked = !input.checked;
            });
        };


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
                    max : 100,
                    step : 1,
                    value : 50,
                    maxNumber : 500000,
                    content : '+',
                    ranges : [
                        {  min: 0, max: 20, vmin: 0, vmax: 1000 },
                        {  min: 21, max: 30, vmin: 1001, vmax: 10000 },
                        {  min: 31, max: 50, vmin: 10001, vmax: 250000 },
                        {  min: 51, max: 70, vmin: 250001, vmax: 300000 },
                        {  min: 71, max: 100, vmin: 250001, vmax: 500000 }
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