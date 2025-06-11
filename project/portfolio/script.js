
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});




const titles = [
  "FrontEnd Developer",
  "Web Developer",
  "UI Designer",
  "React Developer",
  "JavaScript Ninja",
];

let index = 0;
const textSpan = document.getElementById("animatedText");

setInterval(() => {
  index = (index + 1) % titles.length;

  // Remove and re-trigger the animation
  textSpan.style.animation = "none";
  void textSpan.offsetWidth; // force reflow
  textSpan.style.animation = "fadeSlideIn 0.6s ease forwards";

  textSpan.textContent = titles[index];
}, 2000);
