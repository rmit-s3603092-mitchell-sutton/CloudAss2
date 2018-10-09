document.getElementById('loginBtn').addEventListener('click', function() {
   logIn();
}, false);
document.getElementById('choose-playlist-button').addEventListener('click', function() {
    $('#home').show();
    $('#search-before').show();
    $('#search-after').hide();
    $('#back-to-search').hide();
    $('#playlist').show();

}, false);

document.getElementById('create-playlist').addEventListener('click', function(){
    $('#home').hide();
    $('#create-playlist').show();
}, false);

document.getElementById('back-to-search-btn').addEventListener('click', function() {
    $('#search-before').show();
    $('#search-after').hide();
    $('#back-to-search').hide();
}, false);

document.getElementById('search-button').addEventListener('click', function() {
    searchSong();
});

document.getElementById("choose-playlist-button").addEventListener("click", function(){
    choosePlaylist();
});

document.getElementById("choose-playlist-button").addEventListener("click", function(){
    choosePlaylist();
});
document.getElementById("signupInsteadBtn").addEventListener("click", function(){
    $('#signupInsteadBtn').hide();
    $('#passwordConf').show();
    $('#signupBtn').show();
});
document.getElementById("signupBtn").addEventListener("click", function(){
   signUp();
});


