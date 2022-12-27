const Home = document.querySelector(".home-bbtn");
const Catagory = document.querySelector(".cat-bbtn");

Home.addEventListener("click", () => {
  window.location.replace("../index.html");
});
Catagory.addEventListener("click", () => {
  window.location.replace("../Catalog_Page/index.html");
});
// const FigureZoom = document.querySelector(".Figure-zoom");

// function zoom(e) {
//   var zoomer = e.currentTarget;
//   e.offsetX ? (offsetX = e.offsetX) : (offsetX = e.touches[0].pageX);
//   e.offsetY ? (offsetY = e.offsetY) : (offsetX = e.touches[0].pageX);
//   x = (offsetX / zoomer.offsetWidth) * 100;
//   y = (offsetY / zoomer.offsetHeight) * 100;
//   zoomer.style.backgroundPosition = x + "% " + y + "%";
// }
