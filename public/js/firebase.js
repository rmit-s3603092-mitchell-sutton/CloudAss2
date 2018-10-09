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
        console.log("State Changed and is user");
        document.location.href = "/login";
    }
});

var config = {
    apiKey: "AIzaSyDT39yc7LcWqwDWOokrz0xSN12PEGtVG9U",
    authDomain: "bigger-bits.firebaseapp.com",
    databaseURL: "https://bigger-bits.firebaseio.com",
    projectId: "bigger-bits",
    storageBucket: "bigger-bits.appspot.com",
    messagingSenderId: "811061580391"
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
function logIn() {
    if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        console.log('someone was already signed in');

    } else {

        var email = document.getElementById("emailIn").value;
        var password = document.getElementById("passwordIn").value;

        if (validateEmail(email) == false) {
            var warning = "<strong>Invalid!</strong> Please enter a valid email address.";
            setWarning(warning);
            showWarning();
            return;
        }
        if (password.length < 8) {
            var warning = "<strong>Invalid!</strong> Please enter a valid password.";
            setWarning(warning);
            showWarning();
            return;
        }
        // Sign in with email and pass.
        // [START authwithemail]

        showLoader();
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
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
        });
    }

}
function signUp() {

    if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]

    } else {
        var email = document.getElementById('emailIn').value;
        var password = document.getElementById('passwordIn').value;
        var confirm = document.getElementById('passwordConf').value;
        if (validateEmail(email) == false) {
            var warning = "<strong>Invalid!</strong> Please enter a email.";
            setWarning(warning);
            showWarning();
            return;
        }
        if (validatePassword(password) == false) {
            var warning = "<strong>Invalid!</strong> Password must be longer than 7 characters and must contain both lowercase and uppercase letters, as well as a number."
            setWarning(warning);
            showWarning();
            return;
        }
        if (password != confirm){

            var warning = "<strong>Invalid!</strong> Passwords do not match."
            setWarning(warning);
            showWarning();
            return;
        }
        // Sign in with email and pass.
        // [START createwithemail]
        showLoader();
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
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
        });
        // [END createwithemail]

    }
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
