const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const sidebar = document.getElementsByTagName("aside")[0];

document.addEventListener("DOMContentLoaded", () => {
  openBtn.addEventListener("click", () => {
    sidebar.classList.toggle("sidebar-show");
    sidebar.classList.toggle("sidebar-hide");
  });
  closeBtn.addEventListener("click", ()=> {
    sidebar.classList.toggle("sidebar-hide");
    sidebar.classList.toggle("sidebar-show");
  });
});