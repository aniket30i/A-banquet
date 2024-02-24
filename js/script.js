const body = document.querySelector("body");
const menuBtn = document.querySelector(".menu-icon");
const crossBtn = document.querySelector(".cross-icon");
const sidebar = document.querySelector(".sidebar");
const sideBarGradient = document.querySelector(".sidebar-gradient");
const linkTag = document.querySelectorAll(".link-tag");

const openSideBar = () => {
  sidebar.style.right = "0px";
  sideBarGradient.style.display = "inline";
  body.style.overflow = "hidden";
};

const closeSideBar = () => {
  sidebar.style.right = "-800px";
  sideBarGradient.style.display = "none";
  body.style.overflow = "scroll";
};

menuBtn.addEventListener("click", openSideBar);

crossBtn.addEventListener("click", closeSideBar);

sideBarGradient.addEventListener("click", closeSideBar);

linkTag.forEach((e) => {
  e.addEventListener("click", closeSideBar);
});
