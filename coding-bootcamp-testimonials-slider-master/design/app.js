const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const slideWidth = slides[0].getBoundingClientRect().width;
//arrange the slides next to one another
function setSlidesPosition() {
    let index = 0;
    for (let slide of slides) {
        slide.style.left = slideWidth * index + 'px';
        index++;
    }
}
setSlidesPosition(slides);

function moveToSlide(track, currentSlide, targetSlide) {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}
//when I click left, move slides to the left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide')
    if (currentSlide.previousElementSibling) {
        prevSlide = currentSlide.previousElementSibling;
    }
    else {
        prevSlide = currentSlide.nextElementSibling;
    }
    moveToSlide(track, currentSlide, prevSlide)
})
//when I click right, move slides to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide')
    if (currentSlide.nextElementSibling) {
        nextSlide = currentSlide.nextElementSibling;
    }
    else {
        nextSlide = currentSlide.previousElementSibling;
    }
    moveToSlide(track, currentSlide, nextSlide);
})
