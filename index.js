var onSound = false;
function OnSound() {
  onSound = !onSound

  var s = document.getElementById("sound");
  
  if(onSound)
    s.style = "background-color: rgba(255, 255, 255, 1); display: inline;"
  else
    s.style = "background-color: rgba(0, 0, 0, 0.6); display: inline;"
}

window.addEventListener("arjs-nft-loaded", (event) => {
  var d = document.getElementById("mybutton");
  d.style = "display: inline;"

  var s = document.getElementById("sound");
  s.style = "display: inline;"

  // document.appendChild(d + s)
});


window.addEventListener("markerFound", (event) => {
  if (onSound) {
  // sonido
  }
});
