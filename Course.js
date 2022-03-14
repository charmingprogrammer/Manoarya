//Sidebar open
function sidebarOpener() {
  document.getElementById('Sidebar_container').style.left = '0%';
}
//Sidebar closed
function Sidebar_closer() {
  document.getElementById('Sidebar_container').style.left = '-100%';
}
//home function to scroll on top
function home() {
  document.querySelector('*').scrollTo(0, 0);
}
//setting page open
function setting() {
  document.getElementById('setting_page').style.top = '0';
}
//setting page close
function setting_closer() {
  document.getElementById('setting_page').style.top = '-100%';
}
//fetch data from second js file and show into dom
const main_container = document.getElementById('main_container');
const index = document.getElementById('index');

for (var i = 0; i < AllNotes.length; i++) {
  main_container.insertAdjacentHTML('afterbegin', `<div class="boxes" id="${AllNotes[i].Title}">
    <h1 id="title">
    ${AllNotes[i].Title}
    </h1>
    <div id="img_container">
    <img src="${AllNotes[i].ImgUrl}" alt="${AllNotes[i].ImgAlt}" />
    </div>
    // <nav id="nav">
    // <div class="top_items">
    // <b>Page overview</b>
    // <i class="fas fa-align-right" onclick="opener()" class="topicsOpener"></i>
    // </div>
    // <ul id="PageOverview">
    // </ul>
    // </nav>
    <div class="topic_explaning" id='topic_explaning'>
    ${AllNotes[i].Topic}
    </div>`);
  index.insertAdjacentHTML('afterbegin', `<li><a href="#${AllNotes[i].Title}">${AllNotes[i].Title}</a></li>`)
}
//get All H2 tags for quick search
const topic_explaning = document.getElementById('topic_explaning');
const H2 = topic_explaning.getElementsByTagName('h2');

//looping  all h2 inside of nav
for (var i = 0; i < H2.length; i++) {
  document.getElementById('PageOverview').insertAdjacentHTML('afterbegin', `
  <a href="#${H2[i].innerHTML}">${H2[i].innerHTML}</a>`);
  H2[i].id = H2[i].innerHTML
}

//Dark Mode ON OFF
const fullDom = document.querySelector('*');
const pageTitle = main_container.getElementsByTagName("h1");
const settingPage = document.getElementById('setting_page');
const setting_nav = document.getElementById('setting_nav');
const darkModeCon = document.getElementById("darkModeCon");
const bar = document.getElementById('bar');
const darkMode = document.getElementById('darkMode');
const settingIcon = document.getElementById('setting');
const homeIcon = document.getElementById('home');
const Sidebar = document.getElementById('Sidebar_content');

const aTag = document.getElementsByTagName('a');

DarkOn();
function DarkOn() {
  fullDom.style.background = '#191919';
  fullDom.style.color = '#e9e9e9';
  for (var i = 0; i < pageTitle.length; i++) {
    pageTitle[i].style.background = '#191919';
    pageTitle[i].style.color = '#e9e9e9';
  }
  settingPage.style.background = '#191919';
  setting_nav.style.background = '#191919';
  darkModeCon.style.background = '#191919';
  bar.style.background = '#191919';
  bar.style.color = '#bababa';

  darkMode.style.background = '#191919';
  darkMode.style.color = '#bababa';

  settingIcon.style.background = '#191919';
  settingIcon.style.color = '#bababa';


  homeIcon.style.background = '#191919';
  homeIcon.style.color = '#bababa';
  Sidebar.style.background = '#191919';
  Sidebar.style.color = '#bababa';

  for (var i = 0; i < aTag.length; i++) {
    aTag[i].style.color = '#bababa';
  }
}
function DarkOff() {
  fullDom.style.background = 'white';
  fullDom.style.color = '';
  for (var i = 0; i < pageTitle.length; i++) {
    pageTitle[i].style.background = 'white';
    pageTitle[i].style.color = '';
  }
  settingPage.style.background = 'white';
  setting_nav.style.background = 'white';
  darkModeCon.style.background = 'white';
  bar.style.background = 'white';
  bar.style.color = '';

  darkMode.style.background = 'white';
  darkMode.style.color = '';

  settingIcon.style.background = 'white';
  settingIcon.style.color = '';


  homeIcon.style.background = 'white';
  homeIcon.style.color = '';
  Sidebar.style.background = 'white';
  Sidebar.style.color = '';
  for (var i = 0; i < aTag.length; i++) {
    aTag[i].style.color = '';
  }
}



//open content suggestion
function opener() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('nav');
}

const topicsOpener =  document.getElementsByClassName('topicsOpener');
console.log(topicsOpener);