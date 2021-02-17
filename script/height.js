//корректировка размера при загрузке страницы
$(document).ready(function() {
    var imgHeight = $('.slide_img').css('height');
$('.slide_wrapper').css('max-height', imgHeight);
});

/* корректировка размера при повороте устройства
и/или изменении разрешения экрана страницы */
$(window).resize(function() {
    var imgHeight = $('.slide_img').css('height');
    var maxHeight = $('.slide_wrapper').css('max-height');
    var maxHeightStand = '328px'; //изначальное значение max-height
    maxHeight = maxHeightStand;
    // console.log(maxHeight + ' : значение 1');
    $('.slide_wrapper').css('max-height', imgHeight);
    // console.log(imgHeight + ' : значение 2');
})