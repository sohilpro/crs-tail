const newTicketModal = document.getElementById("new-ticket");
const newTicketModalClose = document.getElementById("close-new-ticket");
const cancelNewTicketBtn = document.getElementById("cancel_new_ticket");
const createTicket = document.getElementById("create_ticket");
const showNewTicketModal = document.getElementById("show_new_ticket");

const handleShow = (elment) => {
  elment.classList.remove("hidden");
  elment.classList.add("flex");
};
const handleHide = (elment) => {
  elment.classList.add("hidden");
  elment.classList.remove("flex");
};

showNewTicketModal?.addEventListener("click", () => handleShow(newTicketModal));

newTicketModal?.addEventListener("click", (event) => {
  if (!event.target.closest(".inner-modal-ticket-new")) {
    handleHide(newTicketModal);
  }
});

// createTicket?.addEventListener("click", () => handleShow(chargeModal));
newTicketModalClose?.addEventListener("click", () => {
  handleHide(newTicketModal);
});
cancelNewTicketBtn?.addEventListener("click", () => {
  handleHide(newTicketModal);
});
