function init() {
    var ww = $(window).width()
if (ww>1200) {
    $("html").addClass("pc").removeClass("mobile")
} else {
    $("html").addClass("mobile").removeClass("pc")
}
}

init() 

$(window).on("resize", function(){
    init()
})

$("#header #nav").hover(function(){
    if ($('html').hasClass("pc")) {
        $(".depth2").stop().slideDown()
        $(".deco").stop().slideDown()
    }
},function(){
    if ($('html').hasClass("pc")) {
        $(".depth2").stop().slideUp()
        $(".deco").stop().slideUp()
    }
})

$("#header #nav .depth1>li>a").on("click", function(){
    if ($("html").hasClass("mobile")) {
        $(this).next().slideToggle()
        $(this).parent().siblings().find(".depth2").slideUp()
    }
})

$("#header .opennav").on("click", function(){
    $("#header #nav").toggleClass("on")
    if ($(this).find("i").hasClass("fa-bars")) {
        $(this).find("i").removeClass("fa-bars").addClass("fa-xmark")
    } else {
        $(this).find("i").removeClass("fa-xmark").addClass("fa-bars")
    }
})

$(".quickmenu").hover(
    function(){
        $(this).find('img').attr({
            src:'./images/quick_img_on.png'
        })
    },
    function(){
        $(this).find('img').attr({
            src:'./images/quick_img_off.png'
        })
    }
)