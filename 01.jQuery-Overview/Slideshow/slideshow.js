$(document).ready(function () {
    var currentPosition = 0;
    var slideWidth = 300;
    var slides = $('#slideshowWindow > img');
    var numberOfSlides = slides.length;
    console.log(numberOfSlides);
    var slideShowInterval;
    var speed = 5000;

    setInterval(moveRight, speed);

    $('#slideshowWindow').css('width', slideWidth * numberOfSlides);

    function moveRight() {
        if(currentPosition == numberOfSlides - 1) {
            currentPosition = 0;
        } else {
            currentPosition++;
        }

        moveSlide();
    }

    function moveLeft() {
        if(currentPosition == 0) {
            currentPosition = numberOfSlides - 1;
        } else {
            currentPosition -= 1;
        }

        moveSlide();
    }

    function moveSlide() {
        $('#slideshowWindow')
            .animate({'marginLeft' : slideWidth*(-currentPosition)});
    }

    $('#left').click(moveLeft);
    $('#right').click(moveRight);
});