// initializing the variables
const Input_ffff = document.getElementById("ffff");
const Input_FFFF = document.getElementById("FFFF");
const typing_playground = document.getElementById("typing_playground");

// fetch the keyData from the keyData.js

for (let i = 0; i < keyData.length; i++) {
  const element = keyData[i];
  typing_playground.insertAdjacentHTML(
    "beforeend",
    `
    <div class="playgrounds">
    <h2>${element.title}</h2>
    <input type="search" placeholder="Type" id="${element.key}">
</div>
    `
  );
}

const inputs = typing_playground.querySelectorAll("input");

for (let a = 0; a < inputs.length; a++) {
  const AllInputs = inputs[a];
  AllInputs.addEventListener("keypress", (event) => {
    if (event.key === AllInputs.id) {
      document.getElementById(AllInputs.id).style.backgroundColor = "white";
    } else {
      document.getElementById(AllInputs.id).style.backgroundColor = "#e41313c2";
    }
  });
}
