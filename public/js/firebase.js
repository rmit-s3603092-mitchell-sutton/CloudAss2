// Initialize Firebase
var config = {
    apiKey: "AIzaSyA-KjQUMkefMJcThHIHCg5bBHy_fWuBfj8",
    authDomain: "clouda2jm.firebaseapp.com",
    databaseURL: "https://clouda2jm.firebaseio.com",
    projectId: "clouda2jm",
    storageBucket: "clouda2jm.appspot.com",
    messagingSenderId: "548327908086"
};
firebase.initializeApp(config);

var db = firebase.firestore();

var playlist = document.getElementById("choose-playlist-input");

function choosePlaylist(){
    var text = playlist.value;

    db.collection("playlist").add({
        creatorID: "1h3g47321b",
        name: text,
        songs: [{
            song: "Song 2",
            artist: "Blur",
            id: "123ghuf7832vi"
        }]
    })
        .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
        .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

