var catchMe = document.querySelector(".CatchMe");
var catched = document.getElementById("catched");
var displayMsg = document.querySelector(".display-message");

catchMe.addEventListener("mouseover", function () {
  setTimeout(() => {
    var h = window.innerHeight - 50;
    var w = window.innerWidth - 50;
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    catched.style.top = nh + "px";
    catched.style.left = nw + "px";
  }, 100);
});
// catchMe.addEventListener("click", function () {
//   console.log("here");
//   displayMsg.style.display = "flex";
//   displayMsg.classList.add("transit");
// });
