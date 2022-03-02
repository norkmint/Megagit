(function($){

    $(".main-btn").on({
        mouseenter:function(){  
            //버튼 효과 
            $(".main-btn").removeClass("addMainbtn"); 
            $(this).addClass("addMainbtn");
            
            //서브메 다운 업 효과
            $(".sub").stop().slideUp(0);
            $(this).next().stop().slideDown(500,"swing");

        },
        focusin:function(){
           
           $(".main-btn").removeClass("addMainbtn"); 
            $(this).addClass("addMainbtn"); 
        },
    });


    $("#nav").on({
        mouseleave:function(){
            $(".sub").stop().slideUp(500);
            $(".main-btn").removeClass("addMainbtn");
        }
    });


    //사이트맵 버튼 클릭 이벤트!!
      $(".sitemap-btn").on({
            click:  function(e){
                e.preventDefault();
                $("#search").stop().slideUp(0);
                $("#mymega").stop().slideUp(0);
                $(".sit-btn").toggleClass("change-btn");
                $("#sitemap").stop().slideToggle(300);
            }
        });


    //서치 버튼 클릭 이벤트!!
    $(".search-btn").on({
        click:  function(e){
            e.preventDefault();
            $("#sitemap").stop().slideUp(0);
            $("#mymega").stop().slideUp(0);
            $(".s-btn").toggleClass("change-btn");
            $("#search").stop().slideToggle(300);
        }
    });


    //마이메가 버튼 클릭 이벤트!!
    $(".mymega-btn").on({
        click:  function(e){
            e.preventDefault();
            $("#sitemap").stop().slideUp(0);
            $("#search").stop().slideUp(0);
            $(".m-btn").toggleClass("change-btn");
            $("#mymega").stop().slideToggle(300);
        }
    });


    //링크연결
    $(".main-btn").each(function(index){
        $(this).on({
            click:  function(){
                if(index==0){
                    location.href="https://www.megabox.co.kr/movie"; 
                }
                else if(index==1){
                    location.href="https://www.megabox.co.kr/booking";
                }
                else if(index==2){
                    location.href="https://www.megabox.co.kr/theater/list";
                }
                else if(index==3){
                    location.href="https://www.megabox.co.kr/event";
                }
                else if(index==4){
                    location.href="https://www.megabox.co.kr/store";
                }
                else if(index==5){
                    window.open("https://www.megabox.co.kr/benefit/membership");
                }
            }
        });
    });

})(jQuery);