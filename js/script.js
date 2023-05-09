const myCarousel = document.querySelector('#my-carousel .carousel-inner');
const carouselItems = myCarousel.querySelectorAll('.carousel-item');

let items = document.querySelectorAll('.carousel .carousel-item')


carouselItems.forEach((el) => {
    const minPerSlide = 3;
    let next = el.nextElementSibling;
    for (let i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = carouselItems[0];
        }
        let cloneChild = next.cloneNode(true);
        el.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
    }
});
