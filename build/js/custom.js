/* ====================================
   Jscripts
   ==================================== */

/*--- Slick ---*/
$(document).ready(function() {
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


/*--- Masonry ---*/
function masonry(masonry, paramCols, paramResponsive) {
    const tablet = 992;
    const mobile = 576;
    let cols;
    let responsive = {
        tablet: 2,
        mobile: 1
    };
    let currentCol = 0;
    const wrap = masonry;
    const items = masonry.querySelectorAll('.masonry-story');
    if (paramCols) {
        cols = paramCols
    } else {
        cols = 3
    }
    if (paramResponsive.tablet) {
        responsive.tablet = paramResponsive.tablet
    }

    if (paramResponsive.tablet) {
        responsive.mobile = paramResponsive.mobile
    }

    // create cols
    for (let i = 0; i < cols; i++) {
        const newCol = document.createElement('div');
        newCol.className = 'masonry-col';
        if (window.innerWidth >= tablet) {
            newCol.style.width = 'calc(100%/' + cols + ')';
        } else if (window.innerWidth < tablet && window.width >= mobile) {
            newCol.style.width = 'calc(100%/' + responsive.tablet + ')';
        } else {
            newCol.style.width = 'calc(100%/' + responsive.mobile + ')';
        }
        wrap.appendChild(newCol);
    }

    window.addEventListener('resize', function(e) {
        if (e.target.innerWidth >= tablet) {
            masonry.querySelectorAll('.masonry-col').forEach(element => {
                element.style.width = 'calc(100%/' + cols + ')';
            });
        } else if ((e.target.innerWidth < tablet) && (e.target.innerWidth >= mobile)) {
            masonry.querySelectorAll('.masonry-col').forEach(element => {
                element.style.width = 'calc(100%/' + responsive.tablet + ')';
            });
        } else {
            masonry.querySelectorAll('.masonry-col').forEach(element => {
                element.style.width = 'calc(100%/' + responsive.mobile + ')';
            });
        }
    })

    // append img to col
    for (let count = 0; count < items.length; count++) {
        masonry.querySelectorAll('.masonry-col')[currentCol].appendChild(items[count]);
        if (currentCol < cols - 1) {
            currentCol++;
        } else {
            currentCol = 0;
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const masonrys = document.getElementsByClassName('masonry');
    for (let i = 0; i < masonrys.length; i++) {
        masonry(masonrys[i], null, { tablet: 2, mobile: 1 })
    }
});


/*--- Gallery Hover Effect ---*/
$(function() {
    $('#gallery_effect > li').each(function() { $(this).hoverdir(); });
});


/*--- Back2Top ---*/
jQuery(document).ready(function($) {
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function() {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
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