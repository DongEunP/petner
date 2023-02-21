$(document).ready(function () {
    slider();
    function slider() {
    var winW = window.innerWidth; //화면 가로사이즈
    var swiper = undefined;
    var viewNum = ''; //슬라이드 개수 (옵션)
    var slideNum = $('.slider .swiper-slide').length //슬라이드 총 개수
    var slideInx = 0; //현재 슬라이드 index

    //디바이스 체크
    var winWChk = ''; 
    $(window).on('load resize', function () {
        winW = window.innerWidth;
        if(winWChk != 'mo' && winW <= 768){ //모바일 버전으로 전환할 때
            winWChk = 'mo'
            setTimeout(function() {
                sliderAct();
            }, 300);
        }

        if(winWChk != 'pc' && winW >= 769){ //PC 버전으로 전환할 때
            winWChk = 'pc'
            setTimeout(function() {
                sliderAct();
            }, 300);
        }
    })

        function sliderAct(){
            //슬라이드 초기화 
            if (swiper != undefined){ 
                swiper.destroy();
                swiper = undefined;
            }

            //slidesPerView 옵션 설정
            if (winW > 768){ //PC 버전
                viewNum = 4;
            }else{ //mobile 버전
                viewNum = 2;
            }

            //loop 옵션 체크
            if (slideNum > viewNum){
                loopChk = true;
            }else{ 
                loopChk = false;
            }

            swiper = new Swiper(".slider .inner", {
                slidesPerView: "auto",
                initialSlide :slideInx,
                loop: loopChk,
                centeredSlides: true,
                navigation: {
                    nextEl: $('.slider .swiper-next'),
                    prevEl: $('.slider .swiper-prev'),
                },
                on: {
                    activeIndexChange: function () {
                        slideInx = this.realIndex; //현재 슬라이드 index 갱신
                    }
                },
            });
        }
    }


    //scroll
    var rollHeader = 350;
    $('.cal-wrap').scroll(function(){
        var scroll = getCurrentScroll();
        if ( scroll >= rollHeader ) {
            $('.month_1').css({top:-100});
            $('.month_2').css({top:100});
        }
        else{
            $('.month_1').css({top:100});
            $('.month_2').css({top:-100});
        }
    });
        function getCurrentScroll() {
            // return window.pageYOffset || document.documentElement.scrollTop;
            return document.querySelector('.cal-wrap').scrollTop;
        }

  //탭컨텐츠
    $(".tab_cnt .tab-content").hide();
    $(".tab_cnt ul.tabs>li:first").addClass("active").show();
    $(".tab_cnt .tab-content:first").show();
    $(".tab_cnt ul.tabs>li").click(function(e) {
        e.preventDefault();
        $(".tab_cnt ul.tabs>li").removeClass("active");
        $(this).addClass("active");
        $(".tab_cnt .tab-content").hide();
            
        var activeTab = $(this).find("a").attr("href");
        $(activeTab).show();
        return false;
    });

    $(".tab_cnt3 .tab-content").hide();
    $(".tab_cnt3 ul.tabs>li:first").addClass("active").show();
    $(".tab_cnt3 .tab-content:first").show();
    $(".tab_cnt3 ul.tabs>li").click(function(e) {
        e.preventDefault();
        $(".tab_cnt3 ul.tabs>li").removeClass("active");
        $(this).addClass("active");
        $(".tab_cnt3 .tab-content").hide();
            
        var activeTab = $(this).find("a").attr("href");
        $(activeTab).show();
        return false;
    });

    $("tab_click").click(function(){
    if($("tab_click").hasClass("active")){
        $("tab_click").removeClass("active");
    } else{
        $("tab_click").addClass("active");
    }
    });

    // 클리커
    $('.clicker_btn').on('click',function(){
        $('.clicker_5').animate({top:35},100,function(){
            $(this).animate({top:30},100)
        })
    })

    // 냥냥셀피 클릭시 이미지,색상변경
    $(document).on('click', '.cat_li', function () {
        $('.cat_li div').css({
            'color':'#FD8001',
        });
    })
    $(document).on('click', '.cat_li', function () {
        $('.cat_li').css({
            'border':'1px solid #FD8001'
        });
    })
    $(".cat_li").click(function(){
        $(".cat_img").attr("src", "./img/cat_play_1_1.png");
    })
    $(document).on('click', '.cat_li', function () {
        $('.play_btn').css('backgroundColor','#FD8001')
    })
    $(document).on('click', '.cat_li', function () {
        $('.play_btn').css('color','#fff')
    })
});












