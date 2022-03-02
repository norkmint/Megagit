;(function(window,document,$){

    var cnt = 0; 
    var setId = 0;
    var setId2 = 0;


        //1 카운트 함수
        function nextSlideCountFn(){
            cnt++;
            mainSlideFn();
        }
        function prevSlideCountFn(){
            cnt--;
            mainSlideFn();
        }
    
        //2 메인슬라이드함수
        function mainSlideFn(){
           
            $('.slide-wrap').stop().animate({ left:-685*cnt }, 500, function(){
                if(cnt>3){ cnt=0; } 
                if(cnt<0){ cnt=3; }
                $('.slide-wrap').stop().animate({ left:-685*cnt },0);       
                $('.slide').removeClass('addSlide');                
                $('.slide').eq(cnt+1).addClass('addSlide');   
            });
            
            pageBtnFn(cnt); 
        }


        
        $('.next-btn').on({
            click:  function(){ 
                if( !$('.slide-wrap').is(':animated') ){
                    nextSlideCountFn(); 
                }
                timerControlFn();            
            }
        });

       
        $('.prev-btn').on({
            click:  function(){
                if( !$('.slide-wrap').is(':animated') ){
                    prevSlideCountFn();
                }
                timerControlFn();
            }
        });

        
        $('.slide-wrap').swipe({
            swipeLeft:function(){ 
                if( !$('.slide-wrap').is(':animated') ){
                    nextSlideCountFn(); 
                }
                timerControlFn();
            },
            swipeRight:function(){ 
                if( !$('.slide-wrap').is(':animated') ){
                    prevSlideCountFn();
                }
                timerControlFn();
            }
        });    
         
        
        function timerControlFn(){

            clearInterval(setId);  
            clearInterval(setId2); 
            $('.pause-play-btn').addClass('addPlay'); 

            var cnt2 = 0;
            setId2 = setInterval(function(){
                cnt2++;
                if(cnt2>10){
                    nextSlideCountFn(); 
                    initTimerFn();  
                    clearInterval(setId2); 
                    $('.pause-play-btn').removeClass('addPlay'); 
                }
            },1000);

        } 

        
        $('.page-btn').each(function(index){
            $(this).on({
                click:  function(){
                    cnt=index;     
                    mainSlideFn(); 
                    clearInterval(setId); 
                    $('.pause-play-btn').addClass('addPlay');

                    timerControlFn();

                }
            });
        });

        
        function pageBtnFn(z){ 
            
            z>3 ? z=0 : z;
            
            $('.page-btn').removeClass('addPagebtn');
            $('.page-btn').eq(z).addClass('addPagebtn');
        }

        
        function initTimerFn(){
            setId = setInterval( nextSlideCountFn, 2000);
        }

        initTimerFn();
       
     
        
        $('.pause-play-btn').on({
            click:   function(){
                var x = null;
                    x = $('.pause-play-btn-wrap').hasClass('addPlay'); 
                    if( x==false ){ 

                            clearInterval(setId);
                            clearInterval(setId2);
                            $('.pause-play-btn-wrap').addClass('addPlay'); 
                    }
                    else if( x==true ){ 
                            clearInterval(setId);
                            clearInterval(setId2);
                            initTimerFn();  
                            $('.pause-play-btn-wrap').removeClass('addPlay'); 
                    }
            }
        });


       

})(window,document,jQuery);