const hoverImage = document.getElementById("hero_img");
console.log(hoverImage);

const sound = new Audio("audio.mp3");

function playSound() {
  sound.play();
}

function stopSound() {
  sound.pause();
}

hoverImage.addEventListener("mouseenter", playSound);
hoverImage.addEventListener("mouseleave", stopSound);
