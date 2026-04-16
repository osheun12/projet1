// ***** NAVBAR *****

const icons = document.getElementById("icons");
const links = document.querySelectorAll("nav li");
const nav = document.getElementById("nav");

icons.addEventListener("click", () => {
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});
console.log(icons);
console.log(nav);

// ***** BUTERFLY *****
const butterfly = document.getElementById("butterfly");

butterfly.addEventListener("click", () => {
  butterfly.classList.toggle("fly");
});

// ***** MODE DARK *****
const btn = document.getElementById("theme-toggle");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  console.log("click");
  console.log(document.body.classList);
});
