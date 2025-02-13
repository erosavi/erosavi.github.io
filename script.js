function toggleEnvelope() {
  document.querySelector(".container").classList.toggle("open");
}

function showFullCard() {
  document.getElementById("overlay").style.display = "flex";
}
function hideFullCard() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("bg-music").pause();
}

document.addEventListener("click", function (event) {
  createFlower(event.clientX, event.clientY);
});

function createFlower(x, y) {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  flower.style.left = x - 10 + "px"; // Center the flower when clicking
  flower.style.top = y - 10 + "px";
  document.body.appendChild(flower);

  // Remove the flower element after the animation completes
  flower.addEventListener("animationend", () => {
    flower.remove();
  });
}

function showFullCard() {
  document.getElementById("overlay").style.display = "flex";
  setInterval(createFloatingHearts, 100); // Create hearts every 100ms
  document.getElementById("bg-music").play();
}

function createFloatingHearts() {
  const heart = document.createElement("div"); // Only create one heart at a time now.
  heart.classList.add("heart-float");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = Math.random() * 100 + "vh";
  heart.style.animationDelay = 0; // No delay needed now
  document.body.appendChild(heart);

  heart.addEventListener("animationend", () => {
    heart.remove();
  });
}
