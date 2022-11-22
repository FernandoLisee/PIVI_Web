var config = {
    apiKey: "AIzaSyCZJO60dbwg3slyI14ecfqtvad-9piaQpc",
	  authDomain: "cbank-dd3d6.firebaseapp.com",
	  databaseURL: "https://cbank-dd3d6-default-rtdb.firebaseio.com",
	  projectId: "cbank-dd3d6",
	  storageBucket: "cbank-dd3d6.appspot.com",
	  messagingSenderId: "169271304140",
	  appId: "1:169271304140:web:651397ca6ef23cfe4dc769",
	  measurementId: "G-54DEP2YGHX"
};
firebase.initializeApp(config);

var var_lista = document.getElementById("div_lista");

var dados = ""

    var db = firebaseRef = firebase.database().ref().child("document");
    db.on('child_added',function(snapshot){
        // snapshot.val.forEach(docs => {
        //     console.log(docs.data())
        // })
        console.log(db)
        var adicionado = snapshot.val();
        alert(db);

        dados ="<table>" + "<tr><td>"+adicionado+"</td></tr>" + dados;

        var_lista.innerHTML = dados;
    })


