if (!checkAccess()){   
    document.location.href ="/login";
    showInitial();
}

document.getElementById('goToLogin').addEventListener('click', function() {
    showLogin();
}, false);
document.getElementById('goToSignup').addEventListener('click', function() {
    showSignup();
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
document.getElementById('create-playlist').addEventListener('click', function(){
    showCreatePlaylist();
}, false);

document.getElementById("choose-playlist-button").addEventListener("click", function(){
    choosePlaylist();
    showSearchBefore();
});

document.getElementById('back-to-search-btn').addEventListener('click', function() {
    showSearchBefore();
}, false);

document.getElementById('search-button').addEventListener('click', function() {
    searchSong();
    showSearchAfter();
});

document.getElementById("showCreatePlaylist").addEventListener("click", function(){
    showCreatePlaylist();
});
document.getElementById("create-playlist-btn").addEventListener("click", function(){
    createPlaylist();
});

document.getElementById("signout").addEventListener("click", function(){
    if (signout()){
        showInitial();
    }
});




