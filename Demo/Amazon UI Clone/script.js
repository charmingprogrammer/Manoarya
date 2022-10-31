// Access the element form the html DOM and store into the const variable.
const slider = document.querySelector(".slider_main_box");
const left_btn = document.getElementById('left');
const right_btn = document.getElementById('right')

// Get the slider component width so that we can slide the element into the full page.
const slider_width = slider.clientWidth;

// Scroll the slider or img when left button clicked
left_btn.addEventListener("click" , () => {
    slider.scrollBy(-slider_width,0);
})

// Scroll the slider or img when right button clicked
right_btn.addEventListener("click" , () => {
    slider.scrollBy(slider_width,0);
})