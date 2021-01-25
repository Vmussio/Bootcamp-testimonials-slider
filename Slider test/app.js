const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
console.log(nextButton, prevButton)
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
    console.log(targetSlide.style.left)
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

//when I click left, move slides to the left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide')
    const prevSlide = currentSlide.previousElementSibling;
    moveToSlide(track, currentSlide, prevSlide)
    prevButton.classList.add('is-hidden')
    nextButton.classList.remove('is-hidden')
})
//when I click right, move slides to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide')
    const nextSlide = currentSlide.nextElementSibling;
    moveToSlide(track, currentSlide, nextSlide);
    prevButton.classList.remove('is-hidden')
    nextButton.classList.add('is-hidden')
})