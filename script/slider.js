$(document).ready(function() {

    $('.next').click(function() {
        var dispImg = $('.slide_img.disp');
        var dispImgIndex = $('.slide_img.disp').index();
        var nextImgIndex = dispImgIndex + 1;
        var nextImg = $('.slide_img').eq(nextImgIndex);

        dispImg.fadeOut(1000);
        dispImg.removeClass('disp');

        if (nextImgIndex == ($('.slide_img:last').index()+1)) {
            $('.slide_img').eq(0).fadeIn(1000);
            $('.slide_img').eq(0).addClass('disp');
        } else {
            nextImg.fadeIn(1000);
            nextImg.addClass('disp');
        }
    });

    $('.prev').click(function() {
        var dispImg = $('.slide_img.disp');
        var dispImgIndex = $('.slide_img.disp').index();
        var prevImgIndex = dispImgIndex - 1;
        var prevImg = $('.slide_img').eq(prevImgIndex);

        dispImg.fadeOut(1000);
        dispImg.removeClass('disp');
        prevImg.fadeIn(1000);
        prevImg.addClass('disp');
    });

})