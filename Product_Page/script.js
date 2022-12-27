const Home = document.querySelector(".home-bbtn");
const Catagory = document.querySelector(".cat-bbtn");

Home.addEventListener("click", () => {
  window.location.replace("../index.html");
});
Catagory.addEventListener("click", () => {
  window.location.replace("../Catalog_Page/index.html");
});
