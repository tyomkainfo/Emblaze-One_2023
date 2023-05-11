$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:2000,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1.3
            },
            768:{
                items:2
            },
            1100:{
                items:4
            }
        }
    });

    $("a.scroll-to").on("click", function(e){
        e.preventDefault();
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 10
        }, 800);
    });
});