var parkMusic;

function changeBackgroundToGray() {
  document.body.style.backgroundColor = "gray";
}
// Source - https://stackoverflow.com/a/39162154
// Posted by Surya Teja
// Retrieved 2026-04-28, License - CC BY-SA 3.0

function playMusic() {
  if (!parkMusic) {
    parkMusic = new Audio("mixkit-morning-birds-2472.wav");
    parkMusic.loop = true;
  }

  if (parkMusic.paused) {
    parkMusic.play();
  } else {
    parkMusic.pause();
  }
}
//https://mixkit.co/free-sound-effects/discover/mp3/
