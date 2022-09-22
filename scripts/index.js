// 슬릭슬라이더 플러그인 연결하기
// css CDN과 js CDN을 html 문서 head 구역에 붙여넣기
// 화살표와 번호버튼은 css에서 스타일 잡기

$('.slidegroup').slick({
    autoplay:true,
    autoplaySpeed:5000,
    dots:true,
    prevArrow:'<button class="arrleft"><i class="fas fa-angle-left"></i><button>',
    nextArrow:'<button class="arrright"><i class="fas fa-angle-right"></i><button>',
    // customPaging:function(slider, i) {
    //     var thumb = $(slider.$slides[i]).data();
    //     switch (thumb) {
    //         case '0':thumb='영'; break;
    //         case '1':thumb='일'; break;
    //         case '2':thumb='이'; break;
    //         case '3':thumb='삼'; break;
    //     }
    //     return
    // }
})



$(".tab li a").on("click", function(){
    var num = $(this).parent().index()
    $(this).parent().addClass("on").siblings().removeClass("on")
    $("#section .article3 .main-rept li").eq(num).addClass("on").siblings().removeClass("on")
    $("#section .article3 .main-rept li").eq(num).find('img').animate({
            left:'0px',
            opacity:1
    }, 500)
    $("#section .article3 .main-rept li").eq(num).siblings().find('img').css({
        left:'-200px',
        opacity:0
    })
    
    return false
})