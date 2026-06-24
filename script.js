
let startTime;
let timeout;
let score = 0;

let best = localStorage.getItem("best") || 0;
document.getElementById("best").innerText = best;

const gameArea = document.getElementById("gameArea");

document.getElementById("startBtn").onclick = startGame;

function startGame() {
  score = 0;
  document.getElementById("score").innerText = score;
  spawnTarget();
}

function spawnTarget() {
  gameArea.innerHTML = "";

  const target = document.createElement("div");
  target.classList.add("target");

  const x = Math.random() * 90;
  const y = Math.random() * 80;

  target.style.left = x + "%";
  target.style.top = y + "%";

  startTime = Date.now();

  target.onclick = hitTarget;

  gameArea.appendChild(target);

  timeout = setTimeout(() => {
    spawnTarget(); // mais rápido = mais difícil
  }, 1200);
}

function hitTarget() {
  const reaction = Date.now() - startTime;

  document.getElementById("time").innerText = reaction;

  score++;
  document.getElementById("score").innerText = score;

  if (reaction < best || best == 0) {
    best = reaction;
    localStorage.setItem("best", best);
    document.getElementById("best").innerText = best;
  }

  spawnTarget();
}
