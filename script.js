function change_image(image) {
  const image_container = document.querySelectorAll("main-image");
  image_container.forEach((image_containe) => {
    image_containe.src = image.src;
  });
}

var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");

function changeSlide() {
  if (index < 0) {
    index = slides.length - 1;
  }

  if (index > slides.length - 1) {
    index = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dot[i].classList.remove("active");
  }

  slides[index].style.display = "block";
  dot[index].classList.add("active");

  index++;

  setTimeout(changeSlide, 2000);
}

changeSlide();

const Home = document.querySelector(".home-bbtn");
const Catagory = document.querySelector(".cat-bbtn");

Home.addEventListener("click", () => {
  window.location.replace("./index.html");
});
Catagory.addEventListener("click", () => {
  window.location.replace("./Catalog_Page/index.html");
});

const Detailbtn = document.querySelectorAll(".details-bbtn");

Detailbtn.forEach((alpha) => {
  alpha.addEventListener("click", () => {
    window.location.replace("./Product_Page/index.html");
  });
});
