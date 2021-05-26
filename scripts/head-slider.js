$(() => {
    $('.welcome-img-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        variableWidth: true,
        variableHeight: true,
        centerMode: true,
        lazyLoad: true
    });
});