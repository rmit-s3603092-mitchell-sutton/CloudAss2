//document.location.href ="/login";

document.getElementById('goToLogin').addEventListener('click', function() {
    showLogin();
}, false);
document.getElementById('goToSignup').addEventListener('click', function() {
    showSignup();
}, false);

document.getElementById('goToGoog').addEventListener('click', function() {
    googLogin();
}, false);

document.getElementById('goToSpot').addEventListener('click', function() {
    spotLogin();
}, false);

document.getElementById('loginBtn').addEventListener('click', function() {
    if(logIn()){
        console.log("Logged In");
        //showLoggedIn();
    }
    else{
        console.log("Log in failed");
    }
}, false);
document.getElementById("signupBtn").addEventListener("click", function(){
    if(signUp()){
        console.log("Signed Up");
        //showLoggedIn();
    }
    else{
        console.log("Sign Up failed");

    }
});


document.getElementById('showCreatePlaylist').addEventListener('click', function(){
    if(getUserStatus){
        showCreatePlaylist();
    }
}, false);

document.getElementById("choose-playlist-button").addEventListener("click", function(){
    if(getUserStatus){
        choosePlaylist();
    }

});
document.getElementById("create-playlist-btn").addEventListener("click", function(){
    if(getUserStatus){
        createPlaylist();
    }

});


document.getElementById('back-to-search-btn').addEventListener('click', function() {
    if(getUserStatus){
        showSearchBefore();

    }
}, false);

document.getElementById('search-button').addEventListener('click', function() {
    if(getUserStatus){
        searchSong();
        showSearchAfter();
    }

});


document.getElementById("showCreatePlaylist").addEventListener("click", function(){
    if(getUserStatus){
        showCreatePlaylist();
    }

});


document.getElementById("signout").addEventListener("click", function(){
    if(getUserStatus){
        if (signout()){
            showInitial();
        }
    }

});

/*document.getElementById("sharePlaylist").addEventListener("click", function(){
    if(getUserStatus){
        document.getElementById("shareLink").innerHTML = getPlaylist();
    }

});*/

document.getElementById("addSong").addEventListener("click", function(){
    if(getUserStatus){
        addSong();
    }

});




