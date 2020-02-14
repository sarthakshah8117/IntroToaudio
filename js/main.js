(() => {
  // make a reference to all of the playButton
  const playButton = document.querySelectorAll('.playButton'),
        pauseButton = document.querySelectorAll('.pauseButton'),
        rewindButton = document.querySelectorAll('.rwButton'),
        audioElement = document.querySelector('audio');

let globalPaused = false;
  // play the song associated with the button (its data-trackref attribute)
  function playTrack(){
    // try to fix pause play bug
    // a return statement kills your code execution here - don't go past this point
    if (globalPaused) {
      console.log('paused');
// if our audio is paused, thexn just play the track and exit
      resumeTrack();
      return;
    }

    // debugger;
    let audioSource = this.dataset.trackref;

    // set the audio source
    audioElement.src = `audio/${audioSource}.mp3`;


  // load and play it
  audioElement.load();
   audioElement.play();

}

  function resumeTrack(){
    audioElement.play();
  }
function pauseTrack() {
  audioElement.pause();
  globalPaused = true;
}




function rewindTrack() {
  audioElement.currentTime = 0;

}

  // process the playButton and add some event handling
  playButton.forEach(button => button.addEventListener("click", playTrack));
  pauseButton.forEach(button => button.addEventListener("click", pauseTrack));
  rewindButton.forEach(button => button.addEventListener("click", rewindTrack));




}
)();
