
document.getElementById('search_opener').addEventListener("click", () => {
  document.getElementById('searchContainer').style.left = "0";
  document.getElementById('searchInput').focus();
})
document.getElementById('search_closer').addEventListener("click", () => {
  document.getElementById('searchContainer').style.left = "-100%";
})
function showMoreSugg() {
  document.getElementById('postSuggestionContainer').style.height = "100%";

  document.getElementById('showLessSugg').style.transform = 'scale(1)';
}
function showLessSugg() {
  document.getElementById('postSuggestionContainer').style.height = "400px";

  document.getElementById('showLessSugg').style.transform = 'scale(0)';
}
function showMoreComment() {
  document.getElementById('comment_output_container').style.height = "100%";

  document.getElementById('showLessComment').style.transform = 'scale(1)';
}
function showLessComment() {
  document.getElementById('comment_output_container').style.height = "400px";

  document.getElementById('showLessComment').style.transform = 'scale(0)';
}


const category = document.getElementById('category').textContent;
const filteredData = AllPost.filter(filter => filter.category === category);

for (let i = 0; i < filteredData.length; i++) {

  console.log(filteredData[i]);
  const myUL = document.getElementById('myUL');

  myUL.insertAdjacentHTML("afterbegin", `<li><a href="${filteredData[i].PostUrl}">${filteredData[i].Title}</a></li>`);

  const postSuggestionContainer = document.getElementById('postSuggestionContainer');

  postSuggestionContainer.insertAdjacentHTML('afterbegin', `<a href="${filteredData[i].PostUrl}" class="box">
       <img src="${filteredData[i].ImageUrl}" />
       <h3>${filteredData[i].Title}</h3>
    </a>`);
}


//search script
function keyPress() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


 //hide and show qr code btn using onscroll event
 var prevScrollpos = window.pageYOffset;
 window.onscroll = function () {
   var currentScrollPos = window.pageYOffset;
   if (prevScrollpos < currentScrollPos) {
     document.getElementById("gotoTop").style.bottom = "-100%";
   } else {
     document.getElementById("gotoTop").style.bottom = "10px";
   }
   prevScrollpos = currentScrollPos;
 };


//  Dark mode code
// get the all elements
const body =  document.querySelector("body");
const nav =  document.querySelector('nav');
const navLeft =  document.querySelector(".navLeft");
const postContainer =  document.querySelector('.postContainer');
const postSuggestionContainer = document.getElementById("postSuggestionContainer");
const box =  postSuggestionContainer.querySelectorAll(".box");
const footer =  document.querySelector('footer');
const footer_items =  document.getElementById("footer_items");
const footer_a_tags =  footer_items.querySelectorAll("a");
const searchContainer = document.getElementById("searchContainer");
const search_header =  document.querySelector('.search_header');
const searchInput = document.getElementById("searchInput");
const myUL = document.getElementById("myUL");
const li = myUL.querySelectorAll('li');

DarkModeOn();
function DarkModeOn() {
  body.style.background = '#141518f7';
  nav.style.background = '#141518';
  nav.style.color = 'white';
  navLeft.style.color = 'white';
  postContainer.style.background = '#141518';
  postContainer.style.color = "white";
  postSuggestionContainer.style.background = 'transparent';
  footer.style.background = "#141518";
  footer.style.color = "white";
  searchContainer.style.background = "#141518";
  search_header.style.background = "#141518";
  search_header.style.color = "white";
  searchInput.style.color = "white";
  // loop the some element for apply dark effect on every element
  for (let i = 0; i < box.length; i++) {
    box[i].style.background="#141518";
    box[i].style.color="white";
  }
  // Search ui
  for (let i = 0; i < li.length; i++) {
    li[i].querySelector("a").style.background = '#141518';
    li[i].querySelector("a").style.color = 'white';
  }
  // footer ui
  for (let i = 0; i < footer_a_tags.length; i++) {
    footer_a_tags[i].style.color = 'white';
  }

  document.getElementById("DarkOn").style.background = "";
  document.getElementById("DarkOff").style.background = "dodgerblue";
}

function DarkModeOff() {
  body.style.background = '';
  nav.style.background = '';
  nav.style.color = '';
  navLeft.style.color = '';
  postContainer.style.background = '';
  postContainer.style.color = "";
  postSuggestionContainer.style.background = '';
  footer.style.background = "";
  footer.style.color = "black";
  searchContainer.style.background = "";
  search_header.style.background = "";
  search_header.style.color = "";
  searchInput.style.color = "";
  // loop the some element for apply dark effect on every element
  for (let i = 0; i < box.length; i++) {
    box[i].style.background="";
    box[i].style.color="";
  }
    // Search ui
  for (let i = 0; i < li.length; i++) {
    li[i].querySelector("a").style.background = '';
    li[i].querySelector("a").style.color = '';
  }
    // footer ui
    for (let i = 0; i < footer_a_tags.length; i++) {
      footer_a_tags[i].style.color = '';
    }
    document.getElementById("DarkOn").style.background = "dodgerblue";
  document.getElementById("DarkOff").style.background = "";
}