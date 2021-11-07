// filter  arry data for trending topic
function trendingFilterVal(x) {
  return x.trending === "true";
}
const trendingOutput = AllPost.filter(trendingFilterVal);
for (let i = 0; i < trendingOutput.length; i++) {
  const element = trendingOutput[i];
  const trending = document.getElementById("trending_container");

  trending.insertAdjacentHTML(
    "afterBegin",
    `<a href="${element.PostUrl}" id="box"><img src="${element.ImageUrl}" alt="${element.alt}"></a>`
  );
}

for (let i = 0; i < AllPost.length; i++) {
  const element = AllPost[i];
  const container = document.getElementById("PostSlider");
  container.insertAdjacentHTML(
    "afterBegin",
    `<a href="${element.PostUrl}" id="postCon"><img src="${element.ImageUrl}" alt="${element.alt}"><h2>${element.Title}</h2><p>${element.Paragraph}</p></a>`
  );

  document
  .getElementById("myUL")
  .insertAdjacentHTML(
    "afterbegin",
    `<li><a href="${element.PostUrl}">${element.Title}</a></li>`
  );
}

// slider contoll using these script.

// trending slider controll using these script
const trendingCon = document.getElementById("trending_container");

const trendingWidth = trendingCon.offsetWidth;

function Tleft() {
  trendingCon.scrollBy(-trendingWidth, 0);
}
function TRight() {
  trendingCon.scrollBy(trendingWidth, 0);
}

//function for search option

function SearchOpen() {
  document.getElementById("searchCon").style.transform = "scale(1)";
  document.getElementById("myInput").focus();
}

function SearchClose() {
  document.getElementById("searchCon").style.transform = "scale(0)";
}
function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
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


//open sidebar
function SidebarOpener() {
  document.getElementById("Sidebar").style.left = "0";
  document.getElementById("SidebarCloser").style.right = "0";
}
function SidebarCloser() {
  document.getElementById("Sidebar").style.left = "-100%";
  document.getElementById("SidebarCloser").style.right = "-100%";
}
