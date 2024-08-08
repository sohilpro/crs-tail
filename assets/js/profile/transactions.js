const mobileSearchTrans = document.getElementById("mobile_search_trans");
const mobileSearchShowTrans = document.getElementById("mobile_search_show_trans");

const handleShow = (elment) => {
  elment.classList.remove("hidden");
  elment.classList.add("flex");
};
const handleHide = (elment) => {
  elment.classList.add("hidden");
  elment.classList.remove("flex");
};

mobileSearchShowTrans?.addEventListener("click", () => {
  if (mobileSearchTrans.classList.contains("flex")) {
    return handleHide(mobileSearchTrans);
  }
  handleShow(mobileSearchTrans);
});
