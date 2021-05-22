$(window).on('load', function() {
    $('#loading').hide();
});

anime({
    targets: ".svg-target",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'linear',
    duration: 5000,
    direction: 'normal',
    autoplay: true,
    loop: true
});