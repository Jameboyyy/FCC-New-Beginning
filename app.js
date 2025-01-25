// Select DOM elements
const carouselContainer = document.querySelector('.community__card--container');
const leftButton = document.querySelector('.carousel__button--left');
const rightButton = document.querySelector('.carousel__button--right');

// Card width + gap
const cardWidth = document.querySelector('.community__card').offsetWidth + 30; // 30px is the gap between cards

// Scroll position
let scrollPosition = 0;

// Scroll left
leftButton.addEventListener('click', () => {
    scrollPosition = Math.max(scrollPosition - cardWidth, 0); // Prevent scrolling past the first card
    carouselContainer.style.transform = `translateX(-${scrollPosition}px)`;
});

// Scroll right
rightButton.addEventListener('click', () => {
    const maxScroll = carouselContainer.scrollWidth - carouselContainer.offsetWidth; // Max scrollable distance
    scrollPosition = Math.min(scrollPosition + cardWidth, maxScroll); // Prevent scrolling past the last card
    carouselContainer.style.transform = `translateX(-${scrollPosition}px)`;
});
