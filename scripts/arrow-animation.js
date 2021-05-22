const welcome = document.querySelector('.welcome');
const arrowOptions = { threshold: .8 };

const arrowObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        console.log(entry);
        if(entry.isIntersecting){
            $('.down-arrow').removeClass('fade-animation');
            $('.down-arrow').addClass('flash-animation');
        }
        else if (!entry.isIntersecting) {
            $('.down-arrow').removeClass('flash-animation');
            $('.down-arrow').addClass('fade-animation');
        }
    })
}, arrowOptions);

arrowObserver.observe(welcome);

