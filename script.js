const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const voltaButton = document.querySelector('.botao_clicado')
const form = document.getElementById('myform');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
let currentIndex = 0;

function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});




form.addEventListener("submit", function () {
    // espera 2 segundos antes de limpar (ajuste conforme necessário)
    setTimeout(() => {
        form.reset();
    }, 2000);
});

