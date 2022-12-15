document.getElementById('subBtn').addEventListener("click" , () => {
  document.getElementById('subBtn').style.display = "none";
  document.getElementById('userPic').style.display = "block";
  
 document.getElementById('comment_input_container').style.display = "block";
   
})
document.getElementById('search_opener').addEventListener("click" , () => {
  document.getElementById('searchContainer').style.left = "0";
  document.getElementById('searchInput').focus();
})
document.getElementById('search_closer').addEventListener("click" , () => {
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
/*
//fetch data from Jason file
async function getData() {
  const fetchData = await fetch('https://charmingprogrammer.github.io/Manoarya/Manoarya.js');
 const Data = await fetchData.json();
 
 
 console.log(Data);
 Data.map(AllDataSearch => {
const myUL = document.getElementById('myUL');
   
   myUL.insertAdjacentHTML("afterbegin", `<li><a href="${AllDataSearch.PostUrl}">${AllDataSearch.Title}</a></li>`);
 })
 
 //filter data 
 const filteredData = Data.filter(filterme => filterme.category === category);
 
 console.log(filteredData);
 filteredData.map(AllData => {
   const postSuggestionContainer = document.getElementById('postSuggestionContainer');
   postSuggestionContainer.insertAdjacentHTML('afterbegin', `<a href="${AllData.PostUrl}" class="box">
       <img src="${AllData.ImageUrl}" />
       <h3>${AllData.Title}</h3>
    </a>`);
 })
 
 
}
getData();

*/

const category  = document.getElementById('category').textContent;


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

for(i =0; i < li.length; i++) {
 a = li[i].getElementsByTagName("a")[0];
txtValue = a.textContent|| a.innerText;
if(txtValue.toUpperCase().indexOf(filter) > -1) {
 li[i].style.display="";
}else{
 li[i].style.display="none";
}
}
}


