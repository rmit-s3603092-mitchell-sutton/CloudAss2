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