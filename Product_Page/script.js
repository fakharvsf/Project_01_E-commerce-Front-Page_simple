const Home = document.querySelector(".home-bbtn");
const Catagory = document.querySelector(".cat-bbtn");

Home.addEventListener("click", () => {
  window.location.replace("../index.html");
});
Catagory.addEventListener("click", () => {
  window.location.replace("../Catalog_Page/index.html");
});

const buyNow = document.querySelector("#buy-now-btn");
buyNow.addEventListener("click", () => {
  window.location.href =
    " https://www.walmart.com/ip/Dorel-Home-Pembroke-Convertible-Futon-Grey-Linen/55488992?athcpid=55488992&athpgid=AthenaItempage&athcgid=null&athznid=si&athieid=v0&athstid=CS004&athguid=pk5B_XDuGQNa0ipJWH6qvVEJpf5icfoo1GA1&athancid=null&athena=true";
});

function zoom(e) {
  var zoomer = e.currentTarget;
  e.offsetX ? (offsetX = e.offsetX) : (offsetX = e.touches[0].pageX);
  e.offsetY ? (offsetY = e.offsetY) : (offsetX = e.touches[0].pageX);
  x = (offsetX / zoomer.offsetWidth) * 100;
  y = (offsetY / zoomer.offsetHeight) * 100;
  zoomer.style.backgroundPosition = x + "% " + y + "%";
}
// const FigureZoom = document.querySelector(".Figure-zoom");

// function zoom(e) {
//   var zoomer = e.currentTarget;
//   e.offsetX ? (offsetX = e.offsetX) : (offsetX = e.touches[0].pageX);
//   e.offsetY ? (offsetY = e.offsetY) : (offsetX = e.touches[0].pageX);
//   x = (offsetX / zoomer.offsetWidth) * 100;
//   y = (offsetY / zoomer.offsetHeight) * 100;
//   zoomer.style.backgroundPosition = x + "% " + y + "%";
// }
