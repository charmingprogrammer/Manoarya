// for left bar opening 
const leftBar = document.getElementById('left_bar');
function left() {
  leftBar.style.left = '0';
}
function leftClose() {
leftBar.style.left = '-100%';
}
//for right bar opener
const rightBar = document.getElementById('right_bar');
function right() {
  rightBar.style.right = '0';
}
function rightClose() {
rightBar.style.right = '-100%';
}

//for Small img functions 
const bigPhoto = document.getElementById('big_photo');
const img1src = document.getElementById('img1');
const img2src = document.getElementById('img2');
const img3src = document.getElementById('img3');
const img4src = document.getElementById('img4');


function img1(){
  bigPhoto.src = img1src.src;
}
function img2(){
  bigPhoto.src = img2src.src;
}
function img3(){
  bigPhoto.src = img3src.src;
}
function img4(){
  bigPhoto.src = img4src.src;
}

