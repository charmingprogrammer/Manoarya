function searchInput() {
  document.getElementById("search_container").style.top = "0%";
}
function searchCloser() {
  document.getElementById("search_container").style.top = "-200%";
}



function searchNow() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");

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


//inject title from array
for (var i = 0; i < AllPost.length; i++) {
document.getElementById('myUL').insertAdjacentHTML(
      "afterbegin", `
            <li><a href="${AllPost[i].PostUrl}">${AllPost[i].Title}<i class="fas fa-arrow-up" id="arrow"></i></a></li>
      `);
}


//user auth script

function user() {
    document.getElementById('user_login_con').style.bottom = '0';
}

function userClose() {
  document.getElementById('user_login_con').style.bottom = '-100%'; 
}

setTimeout(() => {
  document.getElementById('user_login_con').style.bottom='0';
}, 5000);