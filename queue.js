    function random(){
        const nextsongindex = Math.floor(Math.random() * songs.length);

        document.getElementById("myAudio").src = songs[nextsongindex][3]
        document.getElementById("songimgplay").src = songs[nextsongindex][2]
        document.getElementById("nameplay").innerText = songs[nextsongindex][0]
        document.getElementById("artplay").innerText = songs[nextsongindex][1]
        playPauseBtn.innerHTML = '<img src="icons/pause-solid.svg" alt="" height="30px">';
    
    };

    function play(song_name) {
        document.getElementById("myAudio").src = songs[song_name][3]
        document.getElementById("songimgplay").src = songs[song_name][2]
        document.getElementById("nameplay").innerText = songs[song_name][0]
        document.getElementById("artplay").innerText = songs[song_name][1]
        playPauseBtn.innerHTML = '<img src="icons/pause-solid.svg" alt="" height="30px">';

        audio.addEventListener('ended', function() {
          random();
        });
        next.addEventListener('click', function(){
        random();
        })

    }


function playAuto(){
    random();
    audio.addEventListener('ended', function() {
        random();
        });
}
playAuto();