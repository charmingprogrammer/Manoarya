//All variable declaration
const nav_container = document.getElementById('nav_container');
const page_container = document.getElementById('page_container');
const x = window.matchMedia("(max-width: 700px)")
//open navigation or sidebar
function nav_opener() {
  nav_container.style.left = '0%';
}
//close navigation or sidebar
function nav_closer() {
  nav_container.style.left = '-100%';
}
//media query script
function myFunction(x) {
if(x.matches) {
  nav_container.style.left = '-100%';
}else{
nav_container.style.left = '0';
}
}
//page controller
function page1() {
  page_container.style.backgroundColor = "#00b5b5";
  page_container.innerHTML = "Page 01";

myFunction(x);

}
function page2() {
  page_container.style.backgroundColor = "#29c29d";
  page_container.innerHTML = "Page 02";
 myFunction(x);
}
function page3() {
  page_container.style.backgroundColor = "#db3391";
  page_container.innerHTML = "Page 03";
  myFunction(x);
  
}
function page4() {
  page_container.style.backgroundColor = "#e79d45";
  page_container.innerHTML = "Page 04";
myFunction(x);
}
function page5() {
  page_container.style.backgroundColor = "#1b4ad8";
  page_container.innerHTML = "Page 05";
  myFunction(x);

}
page1();
