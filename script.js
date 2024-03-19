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


