import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.3.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCo6yvHPJj6-iC5UJH45ivJ_y55qO4-_k8",
  authDomain: "manoarya-aa848.firebaseapp.com",
  projectId: "manoarya-aa848",
  storageBucket: "manoarya-aa848.appspot.com",
  messagingSenderId: "360294335968",
  appId: "1:360294335968:web:9f40692ffc8893758cd785",
  measurementId: "G-DW5MS4WGQD",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// firebse auth code
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getDatabase();

function googleAuth() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log(token)
      // The signed-in user info.
      const user = result.user;
      console.log(user)

      // add the user information into firebase database.
      set(ref(db, "users/"), {
        userPic: user.photoURL,
      });
      document.getElementById("user_login_con").style.top = "-100%";
    })
    .catch((error) => {
      alert(error.code.replace('auth/',''));
    });
}

document.getElementById("googleAuthBtn").addEventListener("click", googleAuth);


// get user data form firebse database
const starCountRef = ref(db, "users/");
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  document.getElementById("googleuserPic").src = data.userPic;
});

// Quotes data form firebase database

const textInput = document.getElementById("addInput");

// ready data
function ReadyData() {
  push(ref(db, "Quotes/"), {
    QuotesByUser: textInput.value,
  });
  document.getElementById("add_input_container").style.transform = "scale(0)";
  Quotes();
}

//send data
document.getElementById("QuotesAdded").addEventListener("submit", ReadyData);


// read data from firebase databas
document.getElementById("Quotes").addEventListener("click", function Quotes() {
  document.querySelector("*").scrollTo(0, 0);
  document.getElementById("add_input_container").style.transform = "scale(0)";
  container.innerHTML = "";

  //   Data page
  const data_container = document.createElement("div");
  data_container.id = "data_container";

  // Read data
  const dbref = ref(db, "Quotes/");
  onValue(dbref, (snapshot) => {
    const data = snapshot.val();
    const ObjKey = Object.keys(data);

    for (let i = 0; i < ObjKey.length; i++) {
      let keys = ObjKey[i];
      let Quotes = data[keys].QuotesByUser;

      container.insertAdjacentHTML(
        "afterbegin",
        `<div class='Quoits_container'><h3><i class="fas fa-quote-left" style ="color:gray;"></i> ${Quotes} <i class="fas fa-quote-right" style ="color:gray;"></i></h3></div>`
      );
    }
  });
});


