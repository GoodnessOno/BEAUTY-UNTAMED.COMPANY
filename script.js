// script.js
angular.module('myApp', []);

var slideIndex = 0;
var slideDuration = 2000; // Change the time interval as per your requirement

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slideshow");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0; // Reset slideIndex to 0 when it reaches the last slide
  }
  slides[slideIndex].style.display = "block";
  setTimeout(showSlides, slideDuration);
}

showSlides(); // Start the slideshow when the page loads


document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded.");
  const catalog = document.querySelector(".catalog");
  const items = document.querySelectorAll(".item");
  const itemWidth = items[0].offsetWidth;
  const containerWidth = catalog.offsetWidth;
  const maxVisibleItems = Math.floor(containerWidth / itemWidth);
  let currentIndex = 0;

  console.log("Max visible items:", maxVisibleItems);

  function updatePosition() {
    const newPosition = -currentIndex * itemWidth;
    catalog.style.transform = `translateX(${newPosition}px)`;
}
});