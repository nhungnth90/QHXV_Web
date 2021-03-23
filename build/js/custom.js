/* ====================================
   Jscripts
   ==================================== */

/*--- Slick ---*/
$(document).ready(function(){
    // Cac Khoa Quoc Hoi
    $('.slick-congress').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        centerMode: true,
        variableWidth: true
    });

    // Thong Tin Toan Quoc
    $('.slick-news').slick({
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        cssEase: 'linear'
    });

    // Thong Tin Dia Phuong
    $('.slick-location').slick({
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        cssEase: 'linear'
    });

    // Phat Bieu - Phong Van
    $('.slick-interview').slick({
        infinite: true,
        speed: 500,
        autoplay: true
    });
});

/*--- Back2Top ---*/
jQuery(document).ready(function($){
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if( $(this).scrollTop() > offset_opacity ) { 
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0 ,
            }, scroll_top_duration
        );
    });

});

ScrollReveal().reveal('.abc');


/*--- Toggle ---*/
    // Search
    // $('.search').on('click', function() {
    //     $('.search-form').toggleClass("active");
    // });

    // // Expand Comment
    // $(".expand-btn").on('click', function() {
    //     $(this).toggleClass("active");
    //     $('#expand_comment').toggleClass("active");
    // });

    // // Expand Reply Comment
    // $("#expand_textarea").on('click', function() {
    //     $(this).toggleClass("active");
    //     $('#confirm_btn').toggleClass("active");
    // });

/*--- Sticky ---*/
// $(".sticky-bar").sticky({ topSpacing: 0 });