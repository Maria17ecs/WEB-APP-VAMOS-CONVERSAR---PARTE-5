function logout() {
    window.location.href = 'index.html';
  }

const firebaseConfig = {
    apiKey: "AIzaSyBHAwVdu7prCNshFL9FI9Qg-9h-XEtpZu8",
    authDomain: "web-app-vamos-conversar.firebaseapp.com",
    databaseURL: "https://web-app-vamos-conversar-default-rtdb.firebaseio.com",
    projectId: "web-app-vamos-conversar",
    storageBucket: "web-app-vamos-conversar.appspot.com",
    messagingSenderId: "267878500867",
    appId: "1:267878500867:web:27ad4a9d420c9c5becdc36",
    measurementId: "G-TQQBCRLY6J"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);
  
const username = getUserName();
console.log("Nome do usuário:", username);

const roomName = getRoomName();
console.log("Nome da sala:", roomName);

function send() {
    const message = document.getElementById("caixa de entrada").value;
    const mensagemArmazenada = message;
    console.log("Mensagem armazenada:", mensagemArmazenada);
    const username = getUserName();
    document.getElementById("caixa de entrada").value = "";
  }

  function getData() {
    firebase.database().ref("/"+room name).on('value', function(snapshot) {
      document.getElementByld("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot){
      childKey = childSnapshot.key; childData = childSnapshot.val();
    iflchildKey != "purpose"){
      firebase message id = childKey;
      message_data = childData;
    //Comece a programar aqui
    <div class="mensagem"></div>
    div updateLike(number_likes):
      number_likes += 1
      const app = initializeApp(firebaseConfig);
      function logout() {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location.replace("index.html");
    //Termine de programar aqui
    }
    });
    });
  }
    
  
    getData();
    
