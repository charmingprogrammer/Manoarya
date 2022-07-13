const AllImgUrl = [
  {
  imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_1280.jpg"
},
  {
  imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_1280.jpg"
},
  {
  imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_1280.jpg"
},
  {
  imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_1280.jpg"
},
  {
  imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_1280.jpg"
},
  {
  imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_1280.jpg"
},
  {
  imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_1280.jpg"
},
  {
  imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_1280.jpg"
},
  {
  imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_1280.jpg"
},
  {
  imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_1280.jpg"
},
  {
  imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_1280.jpg"
},
  {
  imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_1280.jpg"
},
  {
  imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_1280.jpg"
},
  {
  imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_1280.jpg"
},
  {
  imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_1280.jpg"
},
  {
  imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_1280.jpg"
},
  {
  imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_1280.jpg"
},
  {
  imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_1280.jpg"
},
  {
  imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_1280.jpg"
},
  {
  imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_1280.jpg"
},
  {
  imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_1280.jpg"
},
  {
  imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_1280.jpg"
},
  {
  imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_1280.jpg"
},
  {
  imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_1280.jpg"
},
  {
  imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_1280.jpg"
},
  {
  imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_1280.jpg"
},
  {
  imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_1280.jpg"
},
  {
  imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_1280.jpg"
},
  {
  imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_1280.jpg"
},
  {
  imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_1280.jpg"
},
]

//access all items from Img_gallery.html
const container = document.querySelector('.container');
//Access  all  small img
for (var i = 0; i < AllImgUrl.length; i++) {
  container.insertAdjacentHTML('afterbegin', `<div class="small_img">
    <img src="${AllImgUrl[i].imgUrl}"/>
    </div>`)
}