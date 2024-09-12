document.addEventListener('DOMContentLoaded', function() {
  var audio = document.getElementById('myAudio');
  var playPauseBtn = document.getElementById('playPauseBtn');
  var volumeSlider = document.getElementById('volume-slider');
  var progressBar = document.getElementById('progress-bar');
  var currentProgress = document.getElementById('current-progress');
  var hoverBall = document.getElementById('hover-ball');
  var dur = document.getElementById('playprecent');


  playPauseBtn.addEventListener('click', function() {
    if (audio.paused) {
      audio.play();
      playPauseBtn.innerHTML = '<img src="icons/pause-solid.svg" alt="" height="30px">'; // Pause icon
    } else {
      audio.pause();
      playPauseBtn.innerHTML = '<img src="icons/play-solid.svg" alt="" height="30px">'; // Play icon
    }
  });



  volumeSlider.addEventListener('input', function() {
    audio.volume = volumeSlider.value;
    console.log(volumeSlider.value);
    
  });

  progressBar.addEventListener('click', function(event) {
    var clickX = event.clientX - progressBar.getBoundingClientRect().left;
    var percent = clickX / progressBar.offsetWidth;
    audio.currentTime = percent * audio.duration;
  });

  progressBar.addEventListener('mousemove', function(event) {
    hoverBall.style.display = 'block';
  });

  progressBar.addEventListener('mouseleave', function() {
    hoverBall.style.display = 'none';
  });

  audio.addEventListener('timeupdate', function() {
    var progress = (audio.currentTime / audio.duration) * 100;
    currentProgress.style.width = progress + '%';
    hoverBall.style.left = progress + '%';
  });
  audio.addEventListener('timeupdate', function(){
    var currentTime = audio.currentTime;
    var duration = audio.duration;
    var ctm = Math.floor(currentTime / 60);
    var cts = Math.floor(currentTime % 60);
    var dm = Math.floor(duration / 60);
    var ds = Math.floor(duration % 60);
    if(cts < 10){
      var ccts = "0"+cts;
    }else{
      var ccts = cts;
    }
    if(ds < 10){
      var cds = "0"+ds;
    }else{
      var cds = ds;
    }
    dur.innerHTML = ctm + ":"+ccts +" / "+ dm  + ":" + cds;
  });




});





const audio = document.getElementById("myAudio");
const toggleButton = document.getElementById("repeat");



function toggleAudioLoop() {
  // Toggle the loop attribute
  audio.loop = !audio.loop;
  // Change button color based on loop status
  if (audio.loop) {
    toggleButton.innerHTML = '<img src="icons/repeat-solid.svg" alt="" height="30px" >' // Change to your desired color
  } else {
    toggleButton.innerHTML = '<img src="icons/shuffle-solid.svg" alt="" height="30px">'; // Change to your desired color


  }

  // If you want to play the audio after toggling the loop
  // Uncomment the line below
  // audio.play();
}
