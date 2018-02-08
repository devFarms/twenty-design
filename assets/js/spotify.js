function getAlbumArt(){
    axios.get('https://api.spotify.com/v1/users/wouldratherusegoogleplay/playlists/52x0gyrdCKPxtR2cDuscKz/tracks?market=US&fields=items&limit=20&offset=0', {
    headers: {
        "Accept":"application/json",
        "Content-Type":"application/json",
        "Authorization":"Bearer BQBYDBY2P6OmXWw0OQes18SeIhr_s5bjkE0fdeIN_LzbbVTn8foEhKTLpsnlHGXzf76KwgtZ2aioY_45y1XAkJhhZ65R4hLtql0RWT1vFq8kiR59GaWmu9lDCiRgMtRaney4AhGLPALhjzwfuv6aHS_-VjoktKNLczI"
    }
    }).then(function (response){
        // console.log(response.data.items[0].track.album.images[1].url);
        for (i = 0; i < response.data.items.length; i++){
            console.log(response.data.items[i].track.album.images[1].url);
        }
    }).catch(function (error) {
        console.log(error);
    });
}

getAlbumArt();