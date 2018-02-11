

// $("button").on("click", function(){
//     var btnUserName = $(this).attr('data-name');
//     console.log(btnUserName);
//     if (btnUserName === topTwentyUsers[0])
// });

function getAlbumArtAlex(){
    var albumArt = $('#album-art-banner').text('');
    axios.get('https://api.spotify.com/v1/users/wouldratherusegoogleplay/playlists/52x0gyrdCKPxtR2cDuscKz/tracks?market=US&fields=items&limit=20&offset=0', {
    headers: {
        "Accept":"application/json",
        "Content-Type":"application/json",
        "Authorization":"Bearer BQD2raGEHGqerlkb-lQyospgsW0ndK98HYMPDOZpE2jj_dZoK4n5_rMlfq_42iOiMieMf2WMT9Sj6ByI8LDfHhdvzj_wL1NaYnq44cUh_xODZ5_VIyDxyfVmtsOYchApbBRea3PHNar4RkO4WHhOm0K9Y8mNgavKh54"
    }
    }).then(function (response){
        for (i = 0; i < response.data.items.length; i++){
            albumArt = $('<img>');
            albumArt.attr("src", response.data.items[i].track.album.images[1].url);
            $('#album-art-banner').append(albumArt);
            console.log("Album Art function executed.");
        }
    }).catch(function (error) {
        console.log(error);
    });
}

function getAlbumArtAnita(){
    var albumArt = $('#album-art-banner').text('');
    axios.get('https://api.spotify.com/v1/users/digitallobe/playlists/47RtQFMzYZJXTsUoGwk0G9/tracks?market=US&fields=items&limit=20&offset=0', {
    headers: {
        "Accept":"application/json",
        "Content-Type":"application/json",
        "Authorization":"Bearer BQD2raGEHGqerlkb-lQyospgsW0ndK98HYMPDOZpE2jj_dZoK4n5_rMlfq_42iOiMieMf2WMT9Sj6ByI8LDfHhdvzj_wL1NaYnq44cUh_xODZ5_VIyDxyfVmtsOYchApbBRea3PHNar4RkO4WHhOm0K9Y8mNgavKh54"
    }
    }).then(function (response){
        for (i = 0; i < response.data.items.length; i++){
            var albumArt = $('<img>');
            albumArt.attr("src", response.data.items[i].track.album.images[1].url);
            $('#album-art-banner').append(albumArt);
            console.log("Album Art function executed.");
        }
    }).catch(function (error) {
        console.log(error);
    });
}

function getAlbumArtSara(){
    var albumArt = $('#album-art-banner').text('');
    axios.get('https://api.spotify.com/v1/users/digitallobe/playlists/0GhPfY9MvQtnuwMHd7pVtu/tracks?market=US&fields=items&limit=20&offset=0', {
    headers: {
        "Accept":"application/json",
        "Content-Type":"application/json",
        "Authorization":"Bearer BQD2raGEHGqerlkb-lQyospgsW0ndK98HYMPDOZpE2jj_dZoK4n5_rMlfq_42iOiMieMf2WMT9Sj6ByI8LDfHhdvzj_wL1NaYnq44cUh_xODZ5_VIyDxyfVmtsOYchApbBRea3PHNar4RkO4WHhOm0K9Y8mNgavKh54"
    }
    }).then(function (response){
        for (i = 0; i < response.data.items.length; i++){
            var albumArt = $('<img>');
            albumArt.attr("src", response.data.items[i].track.album.images[1].url);
            $('#album-art-banner').append(albumArt);
            console.log("Album Art function executed.");
        }
    }).catch(function (error) {
        console.log(error);
    });
}

// getAlbumArt();