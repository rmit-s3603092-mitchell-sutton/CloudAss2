function showInitial(){
    $('#auth').show();
    $('#initialPage').show();
    $('#loginPage').hide();
    $('#signupPage').hide();
    $('#loggedin').hide();
    $('#createPlaylist').hide();
}
function showLogin(){
    $('#auth').show();
    $('#initialPage').hide();
    $('#loginPage').show();
    $('#signupPage').hide();
    $('#loggedin').hide();
    $('#createPlaylist').hide();
}
function showSignup(){
    $('#auth').show();
    $('#initialPage').hide();
    $('#loginPage').hide();
    $('#signupPage').show();
    $('#loggedin').hide();
    $('#createPlaylist').hide();
}
function showLoggedIn(){
    $('#auth').hide();
    $('#loggedin').show();
    $('#home').show();
    $('#back-to-search').hide();
    $('#search-before').hide();
    $('#search-after').hide();
    $('#playlist').hide();
    $('#create-playlist').hide();
}
function showSearchBefore(){
    $('#auth').hide();
    $('#loggedin').show();
    $('#home').show();
    $('#back-to-search').hide();
    $('#search-before').show();
    $('#search-after').hide();
    $('#playlist').show();
    $('#create-playlist').hide();
}
function showSearchAfter(){
    $('#auth').hide();
    $('#loggedin').show();
    $('#home').show();
    $('#back-to-search').hide();
    $('#search-before').hide();
    $('#search-after').show();
    $('#playlist').show();
    $('#create-playlist').hide();
}
function showCreatePlaylist(){
    $('#auth').hide();
    $('#loggedin').show();
    $('#home').hide();
    $('#back-to-search').hide();
    $('#search-before').hide();
    $('#search-after').hide();
    $('#playlist').hide();
    $('#create-playlist').show();
}

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
        showLoggedIn();
    }
    else{
        console.log("Log in failed");
    }
}, false);
document.getElementById("signupBtn").addEventListener("click", function(){
    if(signUp()){
        console.log("Signed Up");
        showLoggedIn();
    }
    else{
        console.log("Sign Up failed");

    }
});
document.getElementById('create-playlist').addEventListener('click', function(){
    showCreatePlaylist();
}, false);

document.getElementById("choose-playlist-button").addEventListener("click", function(){
    showSearchBefore();
});

document.getElementById('back-to-search-btn').addEventListener('click', function() {
    showSearchBefore();
}, false);

document.getElementById('search-button').addEventListener('click', function() {
    searchSong();
    showSearchAfter();
});

document.getElementById("create-playlist-button").addEventListener("click", function(){
    createPlaylist();
    showCreatePlaylist();
});

document.getElementById("signout").addEventListener("click", function(){
    if (signout()){
        showInitial();
    }
});




