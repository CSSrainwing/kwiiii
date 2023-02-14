// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWc7_n228vgcIV5yj0mVNvMU7vNd1iNHA",
  authDomain: "kwichat.firebaseapp.com",
  databaseURL: "https://kwichat-default-rtdb.firebaseio.com",
  projectId: "kwichat",
  storageBucket: "kwichat.appspot.com",
  messagingSenderId: "635206559476",
  appId: "1:635206559476:web:8f6793ebdac6f8090ae0a1",
  measurementId: "G-KPDDDYCCK4"
};

  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "Chat_Page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "Chat_Page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
