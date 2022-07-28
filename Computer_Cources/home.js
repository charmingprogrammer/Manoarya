// declear all the variables
const main_dom = document.getElementById("main_dom");
const students_btn = document.getElementById("Students");
const Learn_btn = document.getElementById("Learn");

// function for geting the student data and showing it in the main_dom.
function Students() {
  main_dom.innerHTML = "";
  students_btn.style.backgroundColor = "#ffffff";
  Learn_btn.style.backgroundColor = "";

  // get array of students from the Students.js file
  for (let i = 0; i < Students_Data.length; i++) {
    main_dom.insertAdjacentHTML("beforeend", `<div id="card">
    <img src="${Students_Data[i].Image}" alt="lab students">
</div>`); 
  }
}
Students();

function Learn() {
  main_dom.innerHTML = "";
  Learn_btn.style.backgroundColor = "#ffffff";
  students_btn.style.backgroundColor = "";
  main_dom.insertAdjacentHTML("beforeend", `<h1>Comming Soon....</h1>`);
}
