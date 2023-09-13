function header_dropdown(){ //header dropdown
    $("#header .width_con .nav li").hover(function(){
        if(!$(this).hasClass("lang")) {
            $(this).parent(".nav").addClass("open");
        }
    }, function(){
        $(this).parent(".nav").removeClass("open");
    });
};

function signature_video(){  // signature video
    $("#signature.section_03 .width_con .box_con .boxes").each(function(){
        var url = $(this).find("iframe").attr("data-url"); 
         $(this).hover(function(){
             $(this).find("iframe").attr("src", url);
         }, function(){
             $(this).find("iframe").attr("src", "");  
         });
     });
};

function slick_control(){
// self_care slider(slick)
    $('#self_care .width_con .box_con_slide').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3, 
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true, 
        speed: 500,
        autoplaySpeed: 2500,
        arrows: true,
        prevArrow:'<i class="arrows arrow_left fas fa-chevron-left"></i>',
        nextArrow:'<i class="arrows arrow_right fas fa-chevron-right"></i>'
    });
    // men_care slider(slick)
    $('#men_care .cntnt_con .box_con_slide').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
}

$(function() {
    signature_video();
    slick_control();
    header_dropdown();
});
   
function scroll_control(){
    $("html, body").animate({scrollTop: 0}, 1); 
    var nivea = "#header .width_con .btn_home img";
    $(window).scroll(function(){ 
        var scroll_trace = $(document).scrollTop();
        if(scroll_trace >= ($("#visual.section_01").height() - $("#header").height())/2){ 
            $(nivea).removeClass("transparent");
            $("#header").removeClass("transparent_color");
        } else {
            $(nivea).addClass("transparent");
            $("#header").addClass("transparent_color");
        }
       show_this(scroll_trace);
    });
};

function show_this(current_scroll){ 
    var wh = $(window).height(); 
    $(".show_trigger").each(function(){ 
        var offset_Y = $(this).offset().top; 
        if(current_scroll > offset_Y - wh){ 
            $(this).parent().removeClass("wait_scroll"); 
            $(this).remove(); 
        }    
    }); 
    $(".show_trigger_slick").each(function(){
        var offset_Y = $(this).offset().top;
        var $target = $(this).parent().find(".box_con_slide");
        if(current_scroll > offset_Y - wh){
            $target.removeClass("wait_scroll");
            $(this).remove(); 
        }    
    });
}

$(window).load(function(){
    setInterval(function(){
        $("#visual_video").attr("src", $("#visual_video").attr("src"));
    }, 27000);
    scroll_control();
}); 