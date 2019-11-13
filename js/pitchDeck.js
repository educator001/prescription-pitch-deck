/*
pitchDeck.js
This script allows you to make an entire slideshow out of a single large image.
*/

// Position (pos) represents which slide number you are currently on.
var pos = 0;

function goDirection(dir) {
  if (dir === undefined) {
    console.log('Error: Direction undefined.');
  } else {
    switch (dir) {
      default:
        console.log('Error: Bad direction parameter.');
        return;
      case "forward":
        pos++;
        if (pos > 12) {
          pos = 0;
        }
        break;
      case "back":
        pos--;
        if (pos < 0) {
          pos = 12;
        }
    }
    updatePosition();
  }
}

function updatePosition() {
  document.getElementById("position-display").innerHTML = pos;
  document.getElementById("pitch-deck").className = "to-" + pos;
}
