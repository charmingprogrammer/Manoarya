// get the element
const surprise_container = document.getElementById("surprise_container");
const container = document.getElementById("container");


window.addEventListener("scroll", () => {
    if(window.scrollY + document.documentElement.clientHeight  >= document.documentElement.scrollHeight) {
        surprise_container.style.top = "0";
        surprise_container.innerHTML = "";
        surprise_container.insertAdjacentHTML("afterbegin", ` <img src="https://i.gifer.com/Be.gif" alt="surprise" height="100%" width="100%">`)
    }
})
