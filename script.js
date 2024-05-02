const menuIcon = document.querySelector(".menu-btn");
const menuList = document.querySelector(".menu-list");
const cancelIcon = document.querySelector(".cancel-btn");
menuIcon.onclick = () => {
  menuList.classList.add("active");
  menuIcon.classList.add("hide");
};
cancelIcon.onclick = () => {
  menuList.classList.remove("active");
  menuIcon.classList.remove("hide");
};
const navBar = document.querySelector(".navbar");

window.onscroll = () => {
  this.scrollY > 20
    ? navBar.classList.add("sticky")
    : navBar.classList.remove("sticky");
};
