let result = [];
function home() {
  document.getElementById("add_input_container").style.transform = "scale(0)";
  document.querySelector("*").scrollTo(0, 0);
  container.innerHTML = "";
  document.getElementById("recommend_container").style.display = "block";

  for (let i = 0; i < result.length; i++) {
    const data = result[i];
    //   inject data from hare
    container.insertAdjacentHTML(
      "afterbegin",
      `<a target='_blank' href="${data.PostUrl}" class="box"><img src="${data.ImageUrl}" alt="${data.alt}" />
    <h2>${data.Title}</h2></a>`
    );
  }
}
function Home() {
  // create a random data form following script
  for (let i = 1; i <= AllPost.length; i++) {
    const random = Math.floor(Math.random() * (AllPost.length - i));
    result.push(AllPost[random]);
    AllPost[random] = AllPost[AllPost.length - i];
  }
}
// recommend post script
const recommend = AllPost.filter((filter) => filter.recommend === "yes");
function randomUniqueNum(range) {
  let result = [];
  for (let i = 1; i <= range; i++) {
    const random = Math.floor(Math.random() * (range - i));
    result.push(recommend[random]);
    recommend[random] = recommend[range - i];
  }
  // loop and recommend post
  for (let r = 0; r < result.length; r++) {
    const recommendPost = result[r];
    // pull the data inside of the container called recommend in the dom
    const recommendDom = document.getElementById("recommend");
    recommendDom.insertAdjacentHTML(
      "afterbegin",
      `<a target='_blank' href="${recommendPost.PostUrl}" class="box"><img src="${recommendPost.ImageUrl}" alt="${recommendPost.alt}" />
      <h2>${recommendPost.Title}</h2></a>`
    );
  }
  return result;
}
randomUniqueNum(recommend.length);
Home();
home();
