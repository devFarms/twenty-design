function getAlbumArt(){
    axios.get('https://api.spotify.com/v1/users/wouldratherusegoogleplay/playlists/52x0gyrdCKPxtR2cDuscKz/tracks?market=US&fields=items&limit=20&offset=0', {
    headers: {
        "Accept":"application/json",
        "Content-Type":"application/json",
        "Authorization":"Bearer BQAFFcHuRO-_XvQ8sq1s51Bd9mcMaukI6MDlFwMV2vxI-j70MmB-XduJOmpGam6prvvFBwM27e2McRt2kfbNmnlYHYn7f3vWsp5K5AbQ6jPVIaqahUwwXdn4YBGC_aWtteWA3DQEgdRWwg8qhb5sfOSQL4LGoO4pVPg"
    }
    }).then(function (response){
        // console.log(response.data.items[0].track.album.images[1].url);
        for (i = 0; i < response.data.items.length; i++){
            // console.log(response.data.items[i].track.album.images[1].url);
            var albumArt = $('<img>');
            albumArt.attr("src", response.data.items[i].track.album.images[1].url);
            $('#album-art-banner').append(albumArt);
        }
    }).catch(function (error) {
        console.log(error);
    });
}

getAlbumArt();