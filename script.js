const rotateBtn = document.querySelector(".rotate-btn");
const slides = document.querySelectorAll(".bg-slider");
const totalSliders = slides.length;
let index = 0;
rotateBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    if (slide.classList.contains("active")) {
      slide.classList.add("after-active");
    } else {
      slide.classList.remove("after-active");
    }
  });
  slides[index].classList.remove("active");
  index++;
  if (index === totalSliders) {
    index = 0;
  }
  slides[index].classList.add("active");
});
