const order = ["red", "blue", "green", "yellow", "orange"];

const sounds = {
  red: document.getElementById("redSound"),
  blue: document.getElementById("blueSound"),
  green: document.getElementById("greenSound"),
  yellow: document.getElementById("yellowSound"),
  orange: document.getElementById("orangeSound"),
};

let currentIndex = 0;

function playFrom(index) {
  // stop all sounds
  Object.values(sounds).forEach((sound) => {
    sound.pause();
    sound.currentTime = 0;
  });

  currentIndex = index;
  const color = order[currentIndex];
  sounds[color].play();

  // update radio button visually
  document.getElementById(color).checked = true;
}

// auto-play next song
order.forEach((color, index) => {
  sounds[color].addEventListener("ended", () => {
    if (index + 1 < order.length) {
      playFrom(index + 1);
    }
  });
});

// start playlist when user clicks a color
document.querySelectorAll('input[name="color"]').forEach((radio) => {
  radio.addEventListener("change", () => {
    playFrom(order.indexOf(radio.value));
  });
});
