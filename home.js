 function home() {
  document.getElementById("add_input_container").style.transform = "scale(0)";
document.querySelector('*').scrollTo(0,0);
  container.innerHTML = "";
  
  async function getData() {
  const fetchData = await fetch('https://charmingprogrammer.github.io/Manoarya/Manoarya.js');
 const Data = await fetchData.json();
 
Data.map(AllDataSearch => {
   container.insertAdjacentHTML(
      "afterbegin",
      `<a href="${AllDataSearch.PostUrl}" class="box"><img src="${AllDataSearch.ImageUrl}" alt="${AllDataSearch.alt}" />
    <h2>${AllDataSearch.Title}</h2>
    <p>${AllDataSearch.Paragraph}</p></a>`
    );
 })
  
  //   looping data from this script
  for (let i = 0; i < AllPost.length; i++) {
    const data = AllPost[i];
    //   inject data from hare
    container.insertAdjacentHTML(
      "afterbegin",
      `<a href="${data.PostUrl}" class="box"><img src="${data.ImageUrl}" alt="${data.alt}" />
    <h2>${data.Title}</h2>
    <p>${data.Paragraph}</p></a>`
    );
  }
}
home();