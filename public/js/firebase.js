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
var currentPlaylist;


function spotLogin(){
    $.ajax({
        url: 'https://api.spotify.com/v1/me',
        headers: {
            'Authorization': 'Bearer ' + access_token
        },
        success: function(response) {			
            console.log("Woah we made it this far!");
            console.log(response);
            var email = response.email;
            var password = "Test1234";
            firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
                db.collection("user").doc(firebase.auth().currentUser.uid).set({
                    method: "spotify"
                }).then(function(docRef) {
                    console.log("Document written with ID: ", firebase.auth().currentUser.uid);
                    //Add new playlist to user in DB
                }).catch(function(error) {
                    console.error("Error adding document: ", error);
                });
                hideLoader();

                return true;
            }).catch(function(error) {
                hideLoader();
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // [START_EXCLUDE]
                if (errorCode == 'auth/weak-password') {
                    console.log('Javascript did not pick up this error');
                } 
                else if (errorCode == 'auth/email-already-in-use'){
                    var warning = "<strong>Invalid!</strong> User already exists"
                    setWarning(warning);
                    showWarning();
                }else {
                    alert(errorMessage);
                }
                console.log(error);
                // [END_EXCLUDE]
                return false;
            });



            console.log(response);
            showLoggedIn();
        }
    });


}

firebase.auth().onAuthStateChanged(function(user) {
    if(checkAccess()){
        console.log("Spotify api logged in");

        if(user){
            console.log("Logged in");
            showLoggedIn();
        }
        else{
            console.log("Not logged in");
            showInitial();
        }
    }
    else{
        console.log("Not spotify api logged in");
        document.location.href ="/login";
    }
});

function getUserStatus(){
    if (firebase.auth().user){
        return true;
    }
    else{
        return false;
    }
}

var provider = new firebase.auth.GoogleAuthProvider();

function googLogin(){
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        console.log(user.uid);
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.log(errorCode);
        console.log(errorMessage);
    });

}

function signout(){
    firebase.auth().signOut()
        .then(function() {
        return true;
    })
        .catch(function(error) {
        return false;
    });
}


function getPlaylist(){
    return currentPlaylist;
}

var loadedSongs;

function getLoadedSongs(){
    return loadedSongs;
}


function populatePlaylist(){
    if (document.cookie != null){
        var docRef = db.collection("playlist").doc(currentPlaylist);

        var select = document.getElementById("playlist-items");
        var length = select.options.length;
        for (i = 0; i < length; i++) {
            select.options[i] = null;
        }

        docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                console.log(doc.data().creatorID);
                console.log(doc.data().name);

                loadedSongs = doc.data().songs;

                if (loadedSongs != null){
                    var size = Object.keys(songs).length;

                    console.log("size: " + size);


                    for (var i = 0; i<size;i++){

                        var newElement = document.createElement('option');

                        newElement.id = "playlist-item"+i; 
                        newElement.className = "playlist-item";
                        if(i%2 == 0){
                            newElement.setAttribute("style", "background: #DADADA;");
                        }
                        document.getElementById("playlist-items").appendChild(newElement);
                        var source = document.getElementById('song-template2').innerHTML;
                        var template = Handlebars.compile(source);
                        var placeholder = document.getElementById('playlist-item'+i);

                        placeholder.innerHTML = template(loadedSongs[i]);

                        console.log("Printed song: "+loadedSongs[i].name);

                    }
                }

            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }
    else{
        console.log("Playlist does not exist");
    }
}

function addSong(){

    var select = document.getElementById("playlist-items");
    var currentInd = select.selectedIndex;

    var docRef = db.collection("playlist").doc(currentPlaylist);
    docRef.get().then(function(doc) {
        if (doc.exists) {

            console.log("test ended up here, EXISTS");
            var songs = doc.songs;
            var currentSong = songs[currentInd];
            
            var id = currentSong.id;
            var name = currentSong.name;
            var artist = currentSong.artist;
            
            db.collection("playlist").doc(currentPlaylist);
            docRef.set({
                songs: [{
                    id: id,
                    name: name,
                    artist: artist
                }]
            },{ merge: true }).then(function(doc){
                console.log("was able to set current song");
                populatePlaylist();

            }).catch(function(error){
                console.log("Adding song did not work");
            });

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });




    console.log("CurrentInd = "+currentInd + ", currentSong = "+ currentSong);

    loadedSongs.push(currentSong);

    var docRef = db.collection("playlist").doc(currentPlaylist);
    docRef.update({
        songs: loadedSongs
    }).then(function(doc){

        populatePlaylist();


    }).catch(function(error){
        console.log("Adding song did not work");
    });

}

function choosePlaylist(){
    var playlist = document.getElementById("choose-playlist-input");
    var text = playlist.value;
    console.log("choosing playlist");

    if(text != null){
        var docRef = db.collection("playlist").doc(text);

        docRef.get().then(function(doc) {
            if (doc.exists) {
                currentPlaylist = doc.id;
                document.cookie = doc.id;
                document.getElementById("playlist-name").innerHTML = doc.name;
                populatePlaylist();
                showSearchBefore();

                return true;

            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                return false;
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
            return false
        });
    }
    else{
        console.log("Text was Null")
        return false;
    }


}

function createPlaylist(){

    var playlist = document.getElementById("create-playlist-name");

    var text = playlist.value;
    console.log("adding playlist");

    db.collection("playlist").add({
        //Add current user here
        creatorID: firebase.auth().currentUser.uid,
        name: text
    }).then(function(docRef) {
        currentPlaylist = docRef.id;
        document.cookie = docRef.id;

        console.log("Playlist saved as:"+docRef.id);
        db.collection("user").doc(firebase.auth().currentUser.uid).set({
            playlistID: currentPlaylist
        }).then(function() {
            console.log("User saved as:"+firebase.auth().currentUser.uid);
            document.getElementById("playlist-name").innerHTML = text;
            populatePlaylist();
            showSearchBefore();


            return true;
            //Add new playlist to user in DB
        }).catch(function(error) {
            console.error("Error adding document: ", error);
            return false;
        });

        //Add new playlist to user in DB
    }).catch(function(error) {
        console.error("Error adding document: ", error);
        return false;
    });



}



function logIn() {
    if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        console.log('someone was already signed in');

    } 

    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    if (validateEmail(email) == false) {
        var warning = "<strong>Invalid!</strong> Please enter a valid email address.";
        setWarning(warning);
        showWarning();
        return false;
    }

    if (password.length < 8) {
        var warning = "<strong>Invalid!</strong> Please enter a valid password.";
        setWarning(warning);
        showWarning();
        return false;
    }
    // Sign in with email and pass.
    // [START authwithemail]

    showLoader();
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
        hideLoader();
        return true;

    }).catch(function(error) {
        // Handle Errors here.
        hideLoader();
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/wrong-password') {
            var warning = "<strong>Invalid!</strong> Password incorrect";
            setWarning(warning);
            showWarning();
        } 
        else if (errorCode == 'auth/user-not-found'){
            var warning = "<strong>Invalid!</strong> User not found";
            setWarning(warning);
            showWarning();

        }else {
            alert(errorMessage);
        }
        console.log(error);
        return false;
    });

}
function signUp() {

    if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
        console.log('someone was already signed in');


    } 
    var email = document.getElementById('signupEmail').value;
    var password = document.getElementById('signupPassword').value;
    var confirm = document.getElementById('signupConfirm').value;
    if (validateEmail(email) == false) {
        var warning = "<strong>Invalid!</strong> Please enter a email.";
        setWarning(warning);
        showWarning();
        return false;
    }
    if (validatePassword(password) == false) {
        var warning = "<strong>Invalid!</strong> Password must be longer than 7 characters and must contain both lowercase and uppercase letters, as well as a number."
        setWarning(warning);
        showWarning();
        return false;
    }
    if (password != confirm){

        var warning = "<strong>Invalid!</strong> Passwords do not match."
        setWarning(warning);
        showWarning();
        return false;
    }
    // Sign in with email and pass.
    // [START createwithemail]
    showLoader();
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
        db.collection("user").doc(firebase.auth().currentUser.uid).set({
            method: "email&pass"
        }).then(function(docRef) {
            console.log("Document written with ID: ", firebase.auth().currentUser.uid);
            currentPlaylist = firebase.auth().currentUser.uid;
            //Add new playlist to user in DB
        }).catch(function(error) {
            console.error("Error adding document: ", error);
        });
        hideLoader();

        return true;
    }).catch(function(error) {
        hideLoader();
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
            console.log('Javascript did not pick up this error');
        } 
        else if (errorCode == 'auth/email-already-in-use'){
            var warning = "<strong>Invalid!</strong> User already exists"
            setWarning(warning);
            showWarning();
        }else {
            alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
        return false;
    });
    // [END createwithemail]


}


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(re)){
        return true;
    }
    else{
        return false;
    }
}
function validatePassword(password) {
    var lowerCaseLetters = /[a-z]/g;
    var numbers = /[0-9]/g;
    var upperCaseLetters = /[A-Z]/g;


    if(!password.match(lowerCaseLetters)) {  
        return false;
    }

    // Validate capital letters
    else if(!password.match(upperCaseLetters)) {  
        return false;
    } 

    // Validate numbers
    else if(!password.match(numbers)) {  
        return false;
    }

    // Validate length
    else if(password.length < 8) {
        return false;
    }
    else{
        return true;
    }
}

function setWarning(warning){
    warning = warning + "<span id = \"closebtn\" class=\"closebtn\" onclick=\"this.parentElement.style.display='none';\">&times;</span> "
    document.getElementById("alert").innerHTML = warning;
}
function showWarning()
{
    document.getElementById("alert").style.display = "block";

}
function showLoader()
{
    document.getElementById("loader").style.display = "block";

}
function hideLoader(){
    document.getElementById("loader").style.display = "none";
}
