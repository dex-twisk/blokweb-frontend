//carousel slider

//javascript code van carousel slider gebruikt van Dev Ed: https://www.youtube.com/watch?v=At4B7A4GOPg

const caroulselSlide = document.querySelector('.carousel-slide')
const carouselImages = document.querySelectorAll('.carousel-slide img')

const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

let counter = 0;
const size = carouselImages[0].clientWidth;

caroulselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
    if(counter >= 4) return; 
    caroulselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    caroulselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    caroulselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    caroulselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

//hamburger menu

//javacript code van hamburger menu gebruikt van Web Dev Simplified: https://www.youtube.com/watch?v=At4B7A4GOPg

const toggleButton = document.querySelector('.container');
const navbarlinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
    navbarlinks.classList.toggle('open')
})