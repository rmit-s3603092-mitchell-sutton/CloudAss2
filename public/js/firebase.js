// Initialize Firebase
/*
import firebase from 'firebase'
require('firebase/auth')
*/
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

firebase.auth().onAuthStateChanged(function(user) {
    console.log("State Changed");
    if(user){
        showLoggedIn();
    }
    else {
        showInitial();
    }
});

var playlist = document.getElementById("choose-playlist-input");

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

function createPlaylist(){
    var text = playlist.value;
	console.log("Hello");
	console.log(firebase.auth().currentUser);

    db.collection("playlist").add({
		//Add current user here
        creatorID: firebase.auth().currentUser.uid,
        name: text,
        songs: [{
            song: "New Song",
            artist: "1234",
            id: "123ghuf7832vi"
        }]
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
		//Add new playlist to user in DB
    })
        .catch(function(error) {
        console.error("Error adding document: ", error);
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
