// JavaScript for image slider
let slideIndex = 0;

function showSlides() {
  let slides = document.querySelectorAll('.slide');
  if (slideIndex >= slides.length) { slideIndex = 0 }
  if (slideIndex < 0) { slideIndex = slides.length - 1 }

  const slidesContainer = document.querySelector('.slides');
  slidesContainer.style.transform = `translateX(${-100 * slideIndex}%)`; // Flyttar till rätt bild
}

document.querySelector('.next').addEventListener('click', function() {
  slideIndex++;
  showSlides();
});

document.querySelector('.prev').addEventListener('click', function() {
  slideIndex--;
  showSlides();
});

setInterval(() => {
  slideIndex++;
  showSlides();
}, 3000); // Automatisk byte av bild varje 3 sekunder

showSlides(); // Initiera första bilden
