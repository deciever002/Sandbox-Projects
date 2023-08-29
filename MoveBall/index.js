var ball = document.getElementById("ball");

function setInitialStyle() {
  ball.style.left = "10px";
  ball.style.top = "10px";
}

setInitialStyle();

window.addEventListener("keydown", function (event) {
  var cordinates = ball.getBoundingClientRect();
  switch (event.key) {
    case "w":
      if (cordinates.top <= 0) {
        return;
      }
      ball.style.top = parseInt(ball.style.top) - 10 + "px";
      break;
    case "a":
      if (cordinates.left <= 0) {
        return;
      }
      ball.style.left = parseInt(ball.style.left) - 10 + "px";
      break;
    case "s":
      if (
        cordinates.bottom >= this.window.innerHeight ||
        cordinates.bottom >= this.document.documentElement.clientHeight
      ) {
        return;
      }
      ball.style.top = parseInt(ball.style.top) + 10 + "px";
      break;
    case "d":
      if (
        cordinates.right >= this.window.innerWidth ||
        cordinates.right >= this.document.documentElement.clientWidth
      ) {
        return;
      }
      ball.style.left = parseInt(ball.style.left) + 10 + "px";
      break;

    default:
      break;
  }
});
