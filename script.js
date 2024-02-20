//Анимация заголовков при первой прокрутке
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
const slidesContainer = slider.querySelector('#slides');
const slides = slider.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dots');
const pagination = document.getElementById('pagination');
const dots = [];

let currentSlide = 0;
let interval;

// Создаем индикаторы точек (dots), по факту скрыты, но мне лично они больше нравятся, нежели цифры.
// slides.forEach((_, index) => {
//   const dot = document.createElement('span');
//   dot.classList.add('dot');
//   dotsContainer.appendChild(dot);
//   dots.push(dot);
//   dot.addEventListener('click', () => {
//     goToSlide(index);
//   });
// });

// Показываем текущий слайд и активируем соответствующую точку
function showSlide(index) {
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
  currentSlide = index;
  pagination.textContent = `${index + 1} / ${slides.length}`;
  
  // Проверяем, является ли текущий слайд первым или последним, и отключаем соответствующие кнопки
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === slides.length - 1;
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

// Остановка автоматического переключения слайдов
function stopSlider() {
  clearInterval(interval);
}

// Начинаем автоматическое переключение слайдов при загрузке страницы
startSlider();


// Второй слайдер

const slidesContainer2 = document.getElementById('slides2');
const slides2 = document.querySelectorAll('.slide2');
const prevBtn2 = document.getElementById('prevBtn2');
const nextBtn2 = document.getElementById('nextBtn2');
const dotsContainer2 = document.getElementById('dots2');
const pagination2 = document.getElementById('pagination2');
const dots2 = [];
let currentSlide2 = 0;

slides2.forEach((slide, index) => {
  if (index !== currentSlide2) {
    slide.style.display = 'none';
  }
});


prevBtn2.addEventListener('click', prevSlide2);
nextBtn2.addEventListener('click', nextSlide2);

slides2.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  dotsContainer2.appendChild(dot);
  dots2.push(dot);
  dot.addEventListener('click', () => {
    goToSlide2(index);
  });
});

updatePagination2(); 
function showSlide2(index) {
  slides2.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
  currentSlide2 = index;
  updatePagination2();
}

function nextSlide2() {
  currentSlide2 = (currentSlide2 + 1) % slides2.length;
  showSlide2(currentSlide2);
}

function prevSlide2() {
  currentSlide2 = (currentSlide2 - 1 + slides2.length) % slides2.length;
  showSlide2(currentSlide2);
}

function goToSlide2(index) {
  showSlide2(index);
}

function updatePagination2() {
  pagination2.innerHTML = '';
  dots2.forEach((dot, index) => {
    const dotElement = document.createElement('span');
    dotElement.classList.add('dot');
    dotElement.addEventListener('click', () => {
      goToSlide2(index); // Используем правильное имя функции обратного вызова
    });
    dotElement.classList.toggle('active', index === currentSlide2);
    pagination2.appendChild(dotElement);
  });
}