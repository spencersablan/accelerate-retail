const graph = document.querySelector('.graph-container');
const graphOptions = {};

const graphAnimation = anime({
    targets: '.graph-path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 3000,
    direction: 'normal',
    autoplay: false,
    loop: false
})


const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            graphAnimation.play();
        }
    })
}, graphOptions);

observer.observe(graph);


