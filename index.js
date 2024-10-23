const leftSlide = document.querySelector(".left-slide");
const rightSlide = document.querySelector(".right-slide");
const btnDown = document.querySelector(".button-down");
const btnUp = document.querySelector(".button-up");
const slidesLength = rightSlide.querySelectorAll("div").length;

let currentSlideIndex = 0;

leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`;

btnUp.addEventListener("click", () => updateSlides("up"));
btnDown.addEventListener("click", () => updateSlides("down"));

const updateSlides = (direction) => {
  if (direction === "up") {
    currentSlideIndex++;
    if (currentSlideIndex > slidesLength - 1) {
      currentSlideIndex = 0;
    }
  } else if (direction === "down") {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
      currentSlideIndex = slidesLength - 1;
    }
  }
  rightSlide.style.transform = `translateY(-${currentSlideIndex * 100}vh)`;
  leftSlide.style.transform = `translateY(${currentSlideIndex * 100}vh)`;
};
