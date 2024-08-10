const mobileSearchTickets = document.getElementById("mobile_search_tickets");
const mobileSearchShowTickets = document.getElementById("mobile_search_show_tickets");


const handleShow = (elment) => {
  elment.classList.remove("hidden");
  elment.classList.add("flex");
};
const handleHide = (elment) => {
  elment.classList.add("hidden");
  elment.classList.remove("flex");
};

mobileSearchShowTickets?.addEventListener("click", () => {
  if (mobileSearchTickets.classList.contains("flex")) {
    return handleHide(mobileSearchTickets);
  }
  handleShow(mobileSearchTickets);
});

