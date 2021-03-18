/* ====================================
   Jscripts
   ==================================== */

/*--- Slick ---*/
$(document).ready(function(){
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