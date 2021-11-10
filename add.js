
function add() {
//   // document.querySelector("*").scrollTo(0, 0);
//   // container.innerHTML = "";

//   // //   Data page
//   // const data_container = document.createElement("div");
//   // data_container.id = "data_container";

//   // //   looping data from this script
//   // for (let i = 0; i < AllPost.length; i++) {
//   //   const data = AllPost[i];
//   //   //   inject data from hare
//   //   container.insertAdjacentHTML(
//   //     "afterbegin",
//   //     ` <div class='Quoits_container'><h3>${data.Title}</h3></div>
//   //       `
//   //   );
//   // }

//   // //   category page
//   // container.insertAdjacentHTML(
//   //   "afterbegin",
//   //   `
//   //   <div id="addOpener" onClick="Add()"><i class="fas fa-plus"></i></div>
//   //   <div id="add_input_container">
//   //     <div id = 'input_Con_Closer' onClick = 'closeAdd()'><i class="fas fa-times"></i></div>
//   //     <form  onSubmit = 'Quotes()' id='QuotesAdded'> <textarea id="addInput" placeholder="Add Quotes" cols="30" rows="10"></textarea><button type="submit" >Add Quotes</button></form>`
//   // );

  document.getElementById("add_input_container").style.transform = "scale(1)";
}
function Add() {
  document.getElementById("add_input_container").style.transform = "scale(1)";
}
function closeAdd() {
  document.getElementById("add_input_container").style.transform = "scale(0)";
}
