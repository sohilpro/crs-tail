import "./filters.js";
import "./nav-bar.js";
import "./search-inputs.js";
import "./passengers.js";
import "./Calendar.js";
import "./menu.js";
import "./type_way.js";
import "./fast-search.js";

const ticketModal = document.getElementById("ticket-modal");
const closeTicketModal = document.getElementById("close-ticket-modal");
const prePassengerModal = document.getElementById("modal_search_passengers");
const closePrePassengerModal = document.getElementById("close-modal_search_passengers");
const showPrePassengerModal = document.getElementById("show_search_passengers");
const savePassengerModal = document.getElementById("modal_yes_passengers");
const closeSavePassengerModal = document.getElementById("close_modal_yes_passengers");
const showSavePassengerModal = document.getElementById("show_yes_passengers");

// Functions to handle modal visibility
const handleCloseModal = (modal) => {
  modal.classList.remove("flex");
  modal.classList.add("hidden");
};

const handleOpenModal = (modal) => {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
};

// Event listeners for opening and closing modals
showPrePassengerModal.addEventListener("click", () => handleOpenModal(prePassengerModal));
closePrePassengerModal.addEventListener("click", () => handleCloseModal(prePassengerModal));
prePassengerModal.addEventListener("click", (event) => {
  if (!event.target.closest(".inner_modal_search_passengers")) {
    handleCloseModal(prePassengerModal);
  }
});

document.querySelectorAll("#ticket").forEach((ticket) => {
  ticket.addEventListener("click", () => handleOpenModal(ticketModal));
});

closeTicketModal.addEventListener("click", () => handleCloseModal(ticketModal));
ticketModal.addEventListener("click", (event) => {
  if (!event.target.closest(".inner-modal")) {
    handleCloseModal(ticketModal);
  }
});

showSavePassengerModal.addEventListener("click", () => handleOpenModal(savePassengerModal));
closeSavePassengerModal.addEventListener("click", () => handleCloseModal(savePassengerModal));
savePassengerModal.addEventListener("click", (event) => {
  if (!event.target.closest(".inner_modal_yes_passengers")) {
    handleCloseModal(savePassengerModal);
  }
});