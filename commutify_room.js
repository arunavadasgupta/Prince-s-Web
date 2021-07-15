
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyChEF9YfIGonNewoq4zeRDWhi3FAZH_qXo",
      authDomain: "p-r-i-n-c-e-mylc.firebaseapp.com",
      databaseURL: "https://p-r-i-n-c-e-mylc-default-rtdb.firebaseio.com",
      projectId: "p-r-i-n-c-e-mylc",
      storageBucket: "p-r-i-n-c-e-mylc.appspot.com",
      messagingSenderId: "1031889133881",
      appId: "1:1031889133881:web:dccc8b844e6c44b7b288e8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + " !";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function logout()
{
      window.location="index.html";
}
function addRoom()
{
    room_name=document.getElementById("add_room").value;
    firebase.database().ref("/").child(room_name).update({
        room_name
    });
}