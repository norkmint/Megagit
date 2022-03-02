;(function(window,document,$){
    //스크롤

    var t = 0;

    setTimeout(init, 100);

    function init(){
        $('#section3 .info') .stop().animate({left: -2000},1000, function(){
            $('#section3 .info') .stop().animate({left:370},1000);
        });
    }

    function s5AnimationFormatFn(){
        $('#section3 .info') .stop().animate({left: -2000},1000);
    }

    function s5AnimationFn(){
        $('#section3 .info') .stop().animate({left:370},2000);
    }

    $(window).scroll(function(){
        if( $(this).scrollTop() < 1000 ){
            if(t==1){
                t=0; 
                s5AnimationFormatFn();
            }
        }

        if( $(this).scrollTop() >=1000 ){
            if(t==0){ 
                t=1; 
                s5AnimationFn();
            }               
        }
    });




    //모달 띄우기
    $('.notice').on({
        click:  function(e){
            e.preventDefault();

            $('.modal').stop().fadeIn(300);
        }
    });
 

    //닫기
    $('.img-wrap').on({
        click:  function(e){
            e.preventDefault();

            $('.modal').stop().fadeOut(300);
        }
    });


})(window,document,jQuery);