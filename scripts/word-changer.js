let count = 0;
let wordsArr = ['brand.', 'product.', 'planning.', 'growth.', 'engagement.'];

setInterval(function() {
    count++;
    $('#change').fadeOut(300, function() {
        $(this).html(wordsArr[count % wordsArr.length]).fadeIn(500);
    });
}, 3600);