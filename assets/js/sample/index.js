const showSideBar = document.getElementById("show-sideBar");
const sideBar = document.getElementById("sideBar");
const closeSideBar = document.getElementById("close-sideBar");

const handleShow = (event, el) => {
  event.stopPropagation();
  event.preventDefault();

  el.classList.remove("hidden");
  el.classList.add("static");
};

const handleClose = (event, el) => {
  event.stopPropagation();
  event.preventDefault();

  el.classList.add("hidden");
  el.classList.remove("static");
};

showSideBar.addEventListener("click", (event) => handleShow(event, sideBar));
closeSideBar.addEventListener("click", (event) => handleClose(event, sideBar));
sideBar.addEventListener("click", (event) => {
  if (!event.target.closest(".inner-sideBar")) {
    handleClose(event, sideBar);
  }
});
