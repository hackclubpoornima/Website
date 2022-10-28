const maxtrail = 100;
let trailIndex = 0;
const moveTreshold = 10;
const maxSpeed = 5000;
const maxSize = 24;
const maxColor = 16777215;
let x = 0;
let y = 0;
let diffX = 0;
let diffY = 0;

window.addEventListener("mousemove",(e) =>{
  diffX = Math.abs(x - e.offsetX);
  diffY = Math.abs(y - e.offsetY);
  if (diffX >= moveTreshold || diffY >= moveTreshold) {
    spawnTrail(e);
  }
  x = e.offsetX;
  y = e.offsetY;
});

function spawnTrail(e) {
  if (trailIndex >= maxtrail) return;
  trailIndex++;
  const trail = document.createElement("div");

  let size = Math.floor(Math.random() * maxSize + 1) + "px";
  let speed = Math.floor(Math.random() * maxSpeed + 1);
  let color = "#" + Math.floor(Math.random() * maxColor).toString(16);
  trail.classList.add("trail");
  trail.style.backgroundColor = color;
  trail.style.left = e.pageX + "px";
  trail.style.top = e.pageY + "px";
  trail.style.width = size;
  trail.style.animation = "trail " + speed + "ms linear forwards";

  setTimeout(function () {
    trail.remove();
    trailIndex--;
  }, speed);
  document.body.appendChild(trail);
}