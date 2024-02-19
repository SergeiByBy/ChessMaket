document.addEventListener("DOMContentLoaded", function() {
  let fadeInElements = document.getElementsByClassName("fade-in");
  
  function fadeIn() {
    for (let i = 0; i < fadeInElements.length; i++) {
      let element = fadeInElements[i];
      let rect = element.getBoundingClientRect();
      let topOffset = rect.top;
      let windowHeight = window.innerHeight;
      
      if (topOffset < windowHeight * 0.8) {
        element.classList.add("show");
      }
    }
  }
  
  fadeIn();
  
  window.addEventListener("scroll", fadeIn);
});






// SLIDER
const slider = document.getElementById('slider');
const slidesContainer = slider.querySelector('.slides');
const slides = slider.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dots');
const dots = [];

let currentSlide = 0;
let interval;

// Создаем индикаторы точек (dots)
slides.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  dotsContainer.appendChild(dot);
  dots.push(dot);
  dot.addEventListener('click', () => {
    goToSlide(index);
  });
});

// Показываем текущий слайд и активируем соответствующую точку
function showSlide(index) {
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
  currentSlide = index;
}

// Переход к следующему слайду
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Переход к предыдущему слайду
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Переход к конкретному слайду по индексу
function goToSlide(index) {
  showSlide(index);
}

// Добавляем обработчики событий на кнопки "Next" и "Prev"
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Автоматическое переключение слайдов каждые 4 секунды
function startSlider() {
  interval = setInterval(nextSlide, 4000);
}

function stopSlider() {
  clearInterval(interval);
}

// Начинаем автоматическое переключение слайдов при загрузке страницы
startSlider();