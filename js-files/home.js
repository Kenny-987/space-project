// hover effect on explore btn

const exploreBtn = document.querySelector(".circle");

exploreBtn.addEventListener("mouseover", () => {
  exploreBtn.style = "box-shadow: 0px 0px 0px 80px rgba(255, 255, 255, 0.1);";
});
exploreBtn.addEventListener("mouseleave", (e) => {
  exploreBtn.style = "box-shadow: none;";
});
