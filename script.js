const soldier = document.getElementById("soldier");
const butilka = document.getElementById("butilka");

document.addEventListener("keydown", function (event) {
  jump();
});

function jump() {
  if (soldier.classList !== "jump") {
    soldier.classList.add("jump");
  }
  setTimeout(function () {
    soldier.classList.remove("jump");
  }, 300);
}

let isAlive = setInterval(function () {
  let soldierTop = parseInt(
    window.getComputedStyle(soldier).getPropertyValue("top")
  );
  let butilkaLeft = parseInt(
    window.getComputedStyle(butilka).getPropertyValue("left")
  );
  if (butilkaLeft < 40 && butilkaLeft > 0 && soldierTop >= 150) {
    alert("РУСНЯ НА БУТЫЛКЕ");
  }
}, 10);
