//script for nav open and close.
function opener() {
  const nav = document.getElementById('nav'); nav.classList.toggle('nav');
}

//show and hide bg of nav
//change property using onscroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos = currentScrollPos) {
    document.getElementById("nav").style.background = "white";
  } else {
    document.getElementById("nav").style.background = "";
  } prevScrollpos = currentScrollPos;
}

// control left and right scroll
const sliderContainer = document.getElementById('slider_child');

function left() {
  sliderContainer.scrollBy(300,0);
}
function right() {
  sliderContainer.scrollBy(-300,0);
}