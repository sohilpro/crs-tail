import "./filters.js";
import "./nav-bar.js";
import "./search-inputs.js";
import "./passengers.js";
import "./Calendar.js";
import "./menu.js";
import "./type_way.js";
import "./fast-search.js";
import "./info_passengers.js";

const ticketModal = document.getElementById("ticket-modal");
const closeTicketModal = document.getElementById("close-ticket-modal");
const prePassengerModal = document.getElementById("modal_search_passengers");
const closePrePassengerModal = document.getElementById(
  "close-modal_search_passengers"
);
const showPrePassengerModal = document.getElementById("show_search_passengers");
const savePassengerModal = document.getElementById("modal_yes_passengers");
const closeSavePassengerModal = document.getElementById(
  "close_modal_yes_passengers"
);
const closeSavePaymentModal = document.getElementById(
  "close_modal_yes_payment"
);
const PaymentYesModal = document.getElementById("modal_yes_payment");
const showSavePassengerModal = document.getElementById("show_yes_passengers");
const showPaymentModal = document.getElementById("show-payment-modal");
const PaymentModal = document.getElementById("payment-modal");
const showLoadingPayment = document.getElementById("show-loads-payment");
const LoadingPayment = document.getElementById("modal-loads-payment");

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
showPrePassengerModal.addEventListener("click", () =>
  handleOpenModal(prePassengerModal)
);
closePrePassengerModal.addEventListener("click", () =>
  handleCloseModal(prePassengerModal)
);
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

showSavePassengerModal.addEventListener("click", () =>
  handleOpenModal(savePassengerModal)
);
closeSavePassengerModal.addEventListener("click", () =>
  handleCloseModal(savePassengerModal)
);
savePassengerModal.addEventListener("click", (event) => {
  if (!event.target.closest(".inner_modal_yes_passengers")) {
    handleCloseModal(savePassengerModal);
  }
});

showPaymentModal.addEventListener("click", () => {
  handleOpenModal(PaymentModal);
  handleCloseModal(ticketModal);
});

showLoadingPayment.addEventListener("click", () => {
  handleOpenModal(LoadingPayment);

  setTimeout(() => {
    handleCloseModal(LoadingPayment);
    handleOpenModal(PaymentYesModal);
  }, 3000);
});

closeSavePaymentModal.addEventListener("click", () => {
  handleCloseModal(PaymentYesModal);
  handleCloseModal(PaymentModal);
});


