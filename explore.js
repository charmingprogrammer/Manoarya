function explore() {
  document.getElementById("add_input_container").style.transform = "scale(0)";
  document.querySelector('*').scrollTo(0,0);
  container.innerHTML = "";

  //   Data page
  const data_container = document.createElement("div");
  data_container.id = "data_container";

  //   looping data from this script
  for (let i = 0; i < AllPost.length; i++) {
    const data = AllPost[i];
    //   inject data from hare
    container.insertAdjacentHTML(
      "afterbegin",
      `
   <a href="${data.PostUrl}" class="box"><img src="${data.ImageUrl}" alt="${data.alt}" />
    <h2>${data.Title}</h2>
    <p>${data.Paragraph}</p></a>
      `
    );
  }

  //   category page
  container.insertAdjacentHTML(
    "afterbegin",
    `<div id="category_container">
           <div class='category_box'>

           </div>
           <div class='category_box'>
           
           </div>
           <div class='category_box'>
           
           </div>
           <div class='category_box'>
           
           </div>
           <div class='category_box'>
           
           </div>
        </div>`
  );
}
