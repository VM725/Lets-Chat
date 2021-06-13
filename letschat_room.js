// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyB0oLQkxXPWRgXLZlOm3gG9LKCrUnOK-mg",
      authDomain: "lets-chat-841c3.firebaseapp.com",
      databaseURL: "https://lets-chat-841c3-default-rtdb.firebaseio.com",
      projectId: "lets-chat-841c3",
      storageBucket: "lets-chat-841c3.appspot.com",
      messagingSenderId: "230047808796",
      appId: "1:230047808796:web:10894398d44a33c8194ed9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
