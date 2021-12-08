import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import {
  getAnalytics
} from "https://www.gstatic.com/firebasejs/9.4.1/firebase-analytics.js";


const firebaseConfig = {
  apiKey: "AIzaSyCo6yvHPJj6-iC5UJH45ivJ_y55qO4-_k8",
  authDomain: "manoarya-aa848.firebaseapp.com",
  databaseURL: "https://manoarya-aa848-default-rtdb.firebaseio.com",
  projectId: "manoarya-aa848",
  storageBucket: "manoarya-aa848.appspot.com",
  messagingSenderId: "360294335968",
  appId: "1:360294335968:web:9f40692ffc8893758cd785",
  measurementId: "G-DW5MS4WGQD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//google auth script
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/9.4.1/firebase-auth.js";
const provider = new GoogleAuthProvider();
const auth = getAuth();

document.getElementById('subBtn').addEventListener("click", () => {
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    localStorage.setItem("userPic", user.photoURL);
    localStorage.setItem("userName", user.displayName);
    localStorage.setItem("userEmail", user.email);
    document.getElementById('userPic').src = user.photoURL;
    localStorage.setItem("subBtnDisplay", "none");
    localStorage.setItem("userPicDisplay", "block");
    console.log(user);
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
})

const userPic = localStorage.getItem("userPic");
const userName = localStorage.getItem("userName");
const userEmail = localStorage.getItem("userEmail");

console.log(userPic, userName, userEmail);

const subBtnDisplay = localStorage.getItem("subBtnDisplay");

const userPicDisplay = localStorage.getItem("userPicDisplay");

document.getElementById('subBtn').style.display = subBtnDisplay;
document.getElementById('userPic').style.display = userPicDisplay;
document.getElementById('userPic').src = userPic;
document.getElementById('comment_input_container').style.display = userPicDisplay;

//important  some methods
import {
  getDatabase,
  ref,
  set,
  get,
  child,
  onValue,
  push
}
from "https://www.gstatic.com/firebasejs/9.4.1/firebase-database.js";

// access  database
const db = getDatabase();

const postTitle = document.getElementById('postTitle').innerHTML;
// access all input data
const DbUserName = userName;
const DbUserEmail = userEmail;
const DbUserPic = userPic;
const DbUserComment = document.getElementById('comment_input');
// ready data
function ReadyData() {
  push(ref(db, postTitle), {
    UserName: DbUserName,
    userEmail: DbUserEmail,
    userPic: DbUserPic,
    UserComment: DbUserComment.value
  });
  alert('Comment Added');
}
//send data
document.getElementById("commentForm").addEventListener("submit", ReadyData);

// Read data
const starCountRef = ref(db, postTitle);
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  const ObjKey = Object.keys(data);

  for (let i = 0; i < ObjKey.length; i++) {
    let DK = ObjKey[i];
    let UserName = data[DK].UserName;
    let userPic = data[DK].userPic;
    let UserComment = data[DK].UserComment;
    
    const showData = document.getElementById('comment_output_container');

    showData.insertAdjacentHTML('afterbegin', `<div class="commentBox">
      <img src="${userPic}"/>
      <div class="userCommentBox">
      <b>${UserName}</b>
      <p>${UserComment}</p>
      </div>
      </div>`);
  }
});