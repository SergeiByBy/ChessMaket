
// Дотягиваемся до узлов

const slides = document.querySelector('.slides');
const slideWidth = document.querySelector('.slide-cards').clientWidth;
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const pagination = document.querySelector('.pagination');
let currentPage = 0;

// создаём функцию перелистывания страниц, в которой проводим проверку на первую и последнюю.

function goToSlide(index) {
  slides.style.transform = `translateX(-${slideWidth * index}px)`;
  slides.querySelectorAll('.slide-cards').forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
  pagination.textContent = `${index + 1} / 6`;
  if (index === 0) {
    prevBtn.classList.add('disable');
  } else {
    prevBtn.classList.remove('disable');
  }

  if (index === slides.childElementCount - 1) {
    nextBtn.classList.add('disable');
  } else {
    nextBtn.classList.remove('disable');
  }
}

function goToNextSlide() {
  currentPage++;
  if (currentPage > slides.childElementCount - 1) {
    currentPage = 0;
  }
 
  goToSlide(currentPage);
}

function goToPrevSlide() {
  currentPage--;
  if (currentPage < 0) {
    currentPage = slides.childElementCount - 1;
  }
 
  goToSlide(currentPage);
}

prevBtn.addEventListener('click', goToPrevSlide);
nextBtn.addEventListener('click', goToNextSlide);

// setInterval(goToNextSlide, 4000);



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
