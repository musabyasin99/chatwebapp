const xtoggle = document.querySelector(".toggle");
const sidebar = document.querySelector("nav");

xtoggle.addEventListener("click", (e) => {
  xtoggle.classList.toggle("active");
  sidebar.classList.toggle("active");
});
