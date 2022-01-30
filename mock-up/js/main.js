// var w;
// if ($(window).width() > 320) {
//     w = $(".menu").width();
//     $(".js_open_ul").width(w + 86);
// }
// else {

//     $(".js_open_ul").css("display", "none");
//     $(".chat_person").click(
//         function () {
//             $(".left").css('display', 'none');
//             $(".right").css('display', 'block').css('right', '0').css('transition', 'all 7s');
//             $(".write").css('display', 'block').css('right', '0').css('transition', 'all 7s');
//         }
//     );
//     $(".arr_back").click(
//         function () {
//             $(".left").css('display', 'block');
//             $(".right").css('display', 'none').css('right', '-100%').css('transition', 'all 1s');
//             $(".write").css('display', 'none').css('right', '-100%').css('transition', 'all 1s');
//         }
//     );
// }


// $("#menu").click(function () {
//     $(".open_ul").toggle(300);
// });

// $(function () {
//     $('#dl-menu').dlmenu({
//         animationClasses: { classin: 'dl-animate-in-5', classout: 'dl-animate-out-5' }
//     });
// });


$('.js-icon-open').on('click', function () {

    $(this).find(".icon-close").toggle();
    $(this).find(".icon-open").toggle();

    let input = $(this).parents('.form-group').find('input');

    if (input.attr('type') == 'password')
        input.attr('type', 'text');
    else
        input.attr('type', 'password');
});

$('#slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="butt_prev"><img src="img/prev.png"></button>',
    nextArrow: '<button type="button" class="butt_next"><img src="img/next.png"></button>'
});

$('.slider-top').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 3000,
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="butt_prev"><img src="img/next.png"></button>',
    nextArrow: '<button type="button" class="butt_next"><img src="img/next.png"></button>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.slider-top2').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 3000,
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="butt_prev"><img src="img/next.png"></button>',
    nextArrow: '<button type="button" class="butt_next"><img src="img/next.png"></button>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


$('.slider-recommend').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="butt_prev"><img src="img/back.png"></button>',
    nextArrow: '<button type="button" class="butt_next"><img src="img/next2.png"></button>',

});


if ($(window).width() > 1280) {
    $('#vertical').lightSlider({
        gallery: true,
        item: 1,
        vertical: true,
        verticalHeight: 450,
        vThumbWidth: 90,
        thumbItem: 8,
        thumbMargin: 8,
        slideMargin: 0
    });
}
else if ($(window).width() >= 768 && $(window).width() < 1024) {
    $('#vertical').lightSlider({
        gallery: true,
        item: 1,
        vertical: true,
        verticalHeight: 450,
        vThumbWidth: 90,
        thumbItem: 8,
        thumbMargin: 8,
        slideMargin: 0
    });
}
else if ($(window).width() >= 1024 && $(window).width() < 1279) {
    $('#vertical').lightSlider({
        gallery: true,
        item: 1,
        vertical: true,
        verticalHeight: 450,
        vThumbWidth: 90,
        thumbItem: 8,
        thumbMargin: 8,
        slideMargin: 0
    });
}
else {
    $('#vertical').lightSlider({
        gallery: true,
        item: 1,
        vertical: true,
        verticalHeight: 240,
        vThumbWidth: 90,
        thumbItem: 4,
        thumbMargin: 4,
        slideMargin: 0
    });
}




$(".js_modal_open").on("click", function (e) {

    e.preventDefault();

    $(".modal").modal('hide');
    modal_name = $(this).attr("modal_name");


    setTimeout(function () {
        $("#" + modal_name).modal('show');
    }, 500);

});


// var data = [{ id: 0, text: 'Дмитрий Ефремов' },
// { id: 1, text: 'Антон Иванов' }]

// $(".js-example-basic-single").select2({
//     placeholder: "Пациенты",
//     data: data
// });

// $("#select_lang").select2({

// });





$('.burger').click(function () {
    $('.top_section').css('display', 'block');
});
$('.close').click(function () {
    $('.top_section').css('display', 'none');
});



if ($(window).width() <= 1024) {
    $('#menu-trend').click(function () {
        $('.trend').toggleClass('drop-trend');
    });

}
if ($(window).width() <= 1024 && $(".trend").hasClass("drop-trend")) {
    $('.close_trend').click(function () {
        $('.trend').removeClass('drop-trend');
    });
}


$(document).ready(function () {
    $("[href='#el1']").trigger("click");
});