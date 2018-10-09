function getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
}

var userProfileSource = document.getElementById('user-profile-template').innerHTML;
var userProfileTemplate = Handlebars.compile(userProfileSource);
var userProfilePlaceholder = document.getElementById('user-profile');

var params = getHashParams();

var access_token = params.access_token,
    refresh_token = params.refresh_token,
    error = params.error;

if (error) {
    alert('There was an error during the authentication');
} else {
    if (access_token) {

        $.ajax({
            url: 'https://api.spotify.com/v1/me',
            headers: {
                'Authorization': 'Bearer ' + access_token
            },
            success: function(response) {
                userProfilePlaceholder.innerHTML = userProfileTemplate(response);

                console.log(response);

                $('#login').hide();
                $('#loggedin').show();
                $('#home').hide();
                $('#create-playlist').hide();
                $('#passwordConf').hide();
                $('#signupBtn').hide();

                

            }
        });
    } else {
        // render initial screen
        $('#login').show();
        $('#loggedin').hide();
        $('#passwordConf').hide();
        $('#signupBtn').hide();
    }

    /*document.getElementById('obtain-new-token').addEventListener('click', function() {
                $.ajax({
                    url: '/refresh_token',
                    data: {
                        'refresh_token': refresh_token
                    }
                }).done(function(data) {
                    access_token = data.access_token;
                    oauthPlaceholder.innerHTML = oauthTemplate({
                        access_token: access_token,
                        refresh_token: refresh_token
                    });
                });
            }, false);*/

    function searchSong(){
        var searchRaw = document.getElementById("search-input").value;
        var search = searchRaw.replace(" ", "%20"); //"Test%20-%20Text"

        if(searchRaw === ""){
            console.log("Unable to search for \"nothing\"")
            document.getElementById("search-items").innerHTML = "";
            return;
        }

        $.ajax({
            url: 'https://api.spotify.com/v1/search?q=' + search + '&type=track',
            headers: {
                'Authorization': 'Bearer ' + access_token
            },
            success: function(response) {
                console.log(response);
                $('#search-before').hide();
                $('#search-after').show();
                $('#back-to-search').show();

                document.getElementById("search-value").innerHTML =  searchRaw;

                var size = Object.keys(response.tracks.items).length;
                if(size>0){
                    for(var i =0; i<size; i++){
                        var newElement = document.createElement('option');

                        newElement.id = "search-item"+i; 
                        newElement.className = "search-item";
                        if(i%2 == 0){
                            newElement.setAttribute("style", "background: #DADADA;");
                        }
                        document.getElementById("search-items").appendChild(newElement);
                        var source = document.getElementById('song-template').innerHTML;
                        var template = Handlebars.compile(source);
                        var placeholder = document.getElementById('search-item'+i);

                        placeholder.innerHTML = template(response.tracks.items[i]);
                    }
                }
                else{
                    //ERROR message - artist not found
                    console.log("Song not found");
                    document.getElementById("search-items").innerHTML = "";
                }


            }
        });

    }
}
