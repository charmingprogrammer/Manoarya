// for opening the nav bar in mobile view
const index_page = document.getElementById("index_page");
const subTopics = document.getElementById("subTopics");
function OpenNav() {
    index_page.style.left = "0";
}
function CloseNav() {
    index_page.style.left = "-100%";
    subTopics.style.right = '-100%';
}

function sub_Topic_Opener() {
    subTopics.style.right = '0';
}