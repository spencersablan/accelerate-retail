let count = 0;
let wordsArr = ['brand.', 'product.', 'planning.', 'growth.', 'engagement.'];

setTimeout(() => {
    $(() => {
        $('.welcome-img-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: false,
            variableWidth: true,
            variableHeight: true,
            centerMode: true,
            lazyLoad: true
        });
    });
}, 3000)

$('.welcome-img-slider').on('beforeChange', () => {
    count++;
    $('#change').fadeOut(300, function() {
        $(this).html(wordsArr[count % wordsArr.length]).fadeIn(500);
    });
})

