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

function checkAccess(){
        console.log("access token = "+ access_token);
        if (access_token != null) {
            return true;
        } else {   
            return false;
        }
}
if (error) {
    alert('There was an error during the authentication');
} else {

    
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

	var results = [];
	
	function getSearchedSongs(){
		return results;
	}
	
	class songResult{
		constructor (name, artist, id){
			this.name = name;
			this.artist = artist;
			this.id = id;
		}
	}
			
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

                        newElement.id = i; 
                        newElement.className = "search-item";
						
						var song = new songResult(response.tracks.items[i].name, response.tracks.items[i].artists[0].name, response.tracks.items[i].id);
						
                        console.log("song "+i+" = "+song);
						results.push(song);

                        if(i%2 == 0){
                            newElement.setAttribute("style", "background: #DADADA;");
                        }
                        document.getElementById("search-items").appendChild(newElement);
                        var source = document.getElementById('song-template').innerHTML;
                        var template = Handlebars.compile(source);
                        var placeholder = document.getElementById(i);

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

    function addSong(){

        var select = document.getElementById("search-items");

        if (obj !== null) {
            return (obj.innerHTML.indexOf('value="' + value + '"') > -1);
        } else {
            return false;
        }

    }
}
