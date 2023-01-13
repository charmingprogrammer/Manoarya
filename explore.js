// filtring all the dat form array and show in the container
const Cources_data = AllPost.filter((filter) => filter.category === "Cources");
const Demo_data = AllPost.filter((filter) => filter.category === "Demo");
const HTM_data = AllPost.filter((filter) => filter.category === "HTM");
const Explanation_data = AllPost.filter(
  (filter) => filter.category === "Explanation"
);
const CheatSheet_data = AllPost.filter((filter) => filter.category === "Cheet_sheet");
// get Massage refarence from Dom
const Message = document.getElementById("Message");

// main explore function 
function explore() {
  document.getElementById('recommend_container').style.display = "none";
  document.getElementById("add_input_container").style.transform = "scale(0)";
  document.querySelector("*").scrollTo(0, 0);
  container.innerHTML = "";

  //   Data page
  const data_container = document.createElement("div");
  data_container.id = "data_container";

  // looping data from this script
  for (let i = 0; i < AllPost.length; i++) {
    const data = AllPost[i];
    //   inject data from hare
    container.insertAdjacentHTML(
      "afterbegin",
      `
   <a target='_blank' href="${data.PostUrl}" class="box"><img src="${data.ImageUrl}" alt="${data.alt}" />
    <h2>${data.Title}</h2>
    </a>
      `
    );
  }

  //   category page
  container.insertAdjacentHTML(
    "afterbegin",
    `<div id="category_container">
           <div class='category_box' onclick="Cources()">
           <i class="fas fa-graduation-cap"></i>
            <h2>Cources</h2>
           </div>
           <div class='category_box' onclick="Demo()">
           <i class="fas fa-eye"></i>
           <h2>Demo</h2>
           </div>
           <div class='category_box' onclick="HTM()">
           <i class="fas fa-magic"></i>
            <h2>HTM</h2>
           </div>
           <div class='category_box' onclick="Explanation()">
           <i class="fas fa-lightbulb"></i>
           <h2>Explanation</h2>
           </div>
           <div class='category_box' onclick="CheatSheet()">
           <i class="fas fa-book"></i>
           <h2>CheatSheet</h2>
           </div>
        </div>`
  );
}
// function for Cources
function Cources() {
  //  clear the container
  document.querySelector("*").scrollTo(0, 0);
  container.innerHTML = "";
  // open the message box
  Message.style.top = "0";
  Message.innerHTML = Cources_data.length + ' Cources Found';

  // loop Data
  if (Cources_data.length === 0) {
    container.insertAdjacentHTML(
      "afterbegin",
      `
    <h2 style="padding:200px 50px;">No Cources Found </h2>
   `
    );
  } else {
    for (let i = 0; i < Cources_data.length; i++) {
      container.insertAdjacentHTML(
        "afterbegin",
        ` <a target='_blank' href="${Cources_data[i].PostUrl}" class="box"><img src="${Cources_data[i].ImageUrl}" alt="${Cources_data[i].alt}" />
      <h2>${Cources_data[i].Title}</h2>
      </a>`
      );
    }
  }

  //   category page
  container.insertAdjacentHTML(
    "afterbegin",
    `<div id="category_container">
           <div class='category_box' onclick="Cources()">
           <i class="fas fa-graduation-cap"></i>
            <h2>Cources</h2>
           </div>
           <div class='category_box' onclick="Demo()">
           <i class="fas fa-eye"></i>
           <h2>Demo</h2>
           </div>
           <div class='category_box' onclick="HTM()">
           <i class="fas fa-magic"></i>
            <h2>HTM</h2>
           </div>
           <div class='category_box' onclick="Explanation()">
           <i class="fas fa-lightbulb"></i>
           <h2>Explanation</h2>
           </div>
           <div class='category_box' onclick="CheatSheet()">
           <i class="fas fa-book"></i>
           <h2>CheatSheet</h2>
           </div>
        </div>`
  );
}
function Demo() {
  //  clear the container
  document.querySelector("*").scrollTo(0, 0);
  container.innerHTML = "";
  // open the message box
  Message.style.top = "0";
  Message.innerHTML = Demo_data.length + ' Demo Found';
  if (Demo_data.length === 0) {
    container.insertAdjacentHTML(
      "afterbegin",
      `
    <h2 style="padding:200px 50px;">No Demo Found </h2>
   `
    );
  } else {
    // loop Data
    for (let i = 0; i < Demo_data.length; i++) {
      container.insertAdjacentHTML(
        "afterbegin",
        ` <a target='_blank' href="${Demo_data[i].PostUrl}" class="box"><img src="${Demo_data[i].ImageUrl}" alt="${Demo_data[i].alt}" />
    <h2>${Demo_data[i].Title}</h2>
    </a>`
      );
    }
  }

  //   category page
  container.insertAdjacentHTML(
    "afterbegin",
    `<div id="category_container">
           <div class='category_box' onclick="Cources()">
           <i class="fas fa-graduation-cap"></i>
            <h2>Cources</h2>
           </div>
           <div class='category_box' onclick="Demo()">
           <i class="fas fa-eye"></i>
           <h2>Demo</h2>
           </div>
           <div class='category_box' onclick="HTM()">
           <i class="fas fa-magic"></i>
            <h2>HTM</h2>
           </div>
           <div class='category_box' onclick="Explanation()">
           <i class="fas fa-lightbulb"></i>
           <h2>Explanation</h2>
           </div>
           <div class='category_box' onclick="CheatSheet()">
           <i class="fas fa-book"></i>
           <h2>CheatSheet</h2>
           </div>
        </div>`
  );
}
function HTM() {
  //  clear the container
  document.querySelector("*").scrollTo(0, 0);
  container.innerHTML = "";
  // open the message box
  Message.style.top = "0";
  Message.innerHTML = HTM_data.length + ' HTM Posts Found';
  if (HTM_data.length === 0) {
    container.insertAdjacentHTML(
      "afterbegin",
      `
    <h2 style="padding:200px 50px;">No HTM Posts Found </h2>
   `
    );
  } else {
    // loop Data
    for (let i = 0; i < HTM_data.length; i++) {
      container.insertAdjacentHTML(
        "afterbegin",
        ` <a target='_blank' href="${HTM_data[i].PostUrl}" class="box"><img src="${HTM_data[i].ImageUrl}" alt="${HTM_data[i].alt}" />
    <h2>${HTM_data[i].Title}</h2>
    </a>`
      );
    }
  }

  //   category page
  container.insertAdjacentHTML(
    "afterbegin",
    `<div id="category_container">
           <div class='category_box' onclick="Cources()">
           <i class="fas fa-graduation-cap"></i>
            <h2>Cources</h2>
           </div>
           <div class='category_box' onclick="Demo()">
           <i class="fas fa-eye"></i>
           <h2>Demo</h2>
           </div>
           <div class='category_box' onclick="HTM()">
           <i class="fas fa-magic"></i>
            <h2>HTM</h2>
           </div>
           <div class='category_box' onclick="Explanation()">
           <i class="fas fa-lightbulb"></i>
           <h2>Explanation</h2>
           </div>
           <div class='category_box' onclick="CheatSheet()">
           <i class="fas fa-book"></i>
           <h2>CheatSheet</h2>
           </div>
        </div>`
  );
}
function Explanation() {
  //  clear the container
  document.querySelector("*").scrollTo(0, 0);
  container.innerHTML = "";
  // open the message box
  Message.style.top = "0";
  Message.innerHTML = Explanation_data.length + ' Cources Found';

  if (Explanation_data.length === 0) {
    container.insertAdjacentHTML(
      "afterbegin",
      `
    <h2 style="padding:200px 50px;">No Explanation Found </h2>
   `
    );
  } else {
    // loop Data
    for (let i = 0; i < Explanation_data.length; i++) {
      container.insertAdjacentHTML(
        "afterbegin",
        ` <a target='_blank' href="${Explanation_data[i].PostUrl}" class="box"><img src="${Explanation_data[i].ImageUrl}" alt="${Explanation_data[i].alt}" />
    <h2>${Explanation_data[i].Title}</h2>
   </a>`
      );
    }
  }

  //   category page
  container.insertAdjacentHTML(
    "afterbegin",
    `<div id="category_container">
           <div class='category_box' onclick="Cources()">
           <i class="fas fa-graduation-cap"></i>
            <h2>Cources</h2>
           </div>
           <div class='category_box' onclick="Demo()">
           <i class="fas fa-eye"></i>
           <h2>Demo</h2>
           </div>
           <div class='category_box' onclick="HTM()">
           <i class="fas fa-magic"></i>
            <h2>HTM</h2>
           </div>
           <div class='category_box' onclick="Explanation()">
           <i class="fas fa-lightbulb"></i>
           <h2>Explanation</h2>
           </div>
           <div class='category_box' onclick="CheatSheet()">
           <i class="fas fa-book"></i>
           <h2>CheatSheet</h2>
           </div>
        </div>`
  );
}
function CheatSheet() {
  //  clear the container
  document.querySelector("*").scrollTo(0, 0);
  container.innerHTML = "";
  // open the message box
  Message.style.top = "0";
  Message.innerHTML = CheatSheet_data.length + ' Cheat Sheet Found';
  if (CheatSheet_data.length === 0) {
    container.insertAdjacentHTML(
      "afterbegin",
      `
    <h2 style="padding:200px 50px;">No Cheat Sheet Found </h2>
   `
    );
  } else {
    // loop Data
    for (let i = 0; i < CheatSheet_data.length; i++) {
      container.insertAdjacentHTML(
        "afterbegin",
        ` <a  target='_blank' href="${CheatSheet_data[i].PostUrl}" class="box"><img src="${CheatSheet_data[i].ImageUrl}" alt="${CheatSheet_data[i].alt}" />
     <h2>${CheatSheet_data[i].Title}</h2>
    </a>`
      );
    }
  }

  //   category page
  container.insertAdjacentHTML(
    "afterbegin",
    `<div id="category_container">
            <div class='category_box' onclick="Cources()">
            <i class="fas fa-graduation-cap"></i>
             <h2>Cources</h2>
            </div>
            <div class='category_box' onclick="Demo()">
            <i class="fas fa-eye"></i>
            <h2>Demo</h2>
            </div>
            <div class='category_box' onclick="HTM()">
            <i class="fas fa-magic"></i>
             <h2>HTM</h2>
            </div>
            <div class='category_box' onclick="Explanation()">
            <i class="fas fa-lightbulb"></i>
            <h2>Explanation</h2>
            </div>
            <div class='category_box' onclick="CheatSheet()">
            <i class="fas fa-book"></i>
            <h2>CheatSheet</h2>
            </div>
         </div>`
  );
}

// remove massage
setInterval(() => {
  document.getElementById("Message").style.top = "-100%";
}, 2000);
