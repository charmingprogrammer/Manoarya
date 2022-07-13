	//show data inside of all images container
	const allImg = document.getElementById('allImg');
	
	allImg.innerHTML = `<img src="https://i.gifer.com/1amw.gif" alt="loader">`;
	
let topic =  "nature";	

function searchImg() {
const searchInput  =	document.getElementById('searchimg');
	
	topic = searchInput.value;
	console.log(topic);
	
  getData();
}

async function getData() {
const responseData = await fetch('https://pixabay.com/api/?key=21480493-5c466af89bb6c5ee2417d3e5b&q='+topic+'&image_type=photo&pretty=true');
const MainData = await responseData.json();

const hits = MainData.hits;
allImg.innerHTML = ``;

document.getElementById('img_changer').innerHTML = `<img src="${hits[1].largeImageURL}" alt="main post" />`;


//loop all MainData 
for (let i = 0; i < hits.length; i++) {
	console.log(hits[i])
allImg.insertAdjacentHTML('afterbegin',`<li><a href="${hits[i].largeImageURL}"><span id="tags">${hits[i].Tags}</span><img src="${hits[i].previewURL}" alt="${hits[i].Tags}" /></a></li>`);
}
}

getData();


console.log("function");