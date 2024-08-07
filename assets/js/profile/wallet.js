const chargeModal = document.getElementById("modal_charge");
const chargedModal = document.getElementById("modal_charged");
const closeChargedModal = document.getElementById("close_modal_charged");
const chargeBtn = document.getElementById("chargeBtn");
const paymentBtn = document.getElementById("paymentBtn");

const handleShow = (elment) => {
  elment.classList.remove("hidden");
  elment.classList.add("flex");
};
const handleHide = (elment) => {
  elment.classList.add("hidden");
  elment.classList.remove("flex");
};

chargeModal?.addEventListener("click", (event) => {
  if (!event.target.closest(".inner_modal_charge")) {
    handleHide(chargeModal);
  }
});
chargedModal?.addEventListener("click", (event) => {
  if (!event.target.closest(".inner_modal_charged")) {
    handleHide(chargedModal);
  }
});

chargeBtn?.addEventListener("click", () => handleShow(chargeModal));
closeChargedModal?.addEventListener("click", () => {
  handleHide(chargeModal);
  handleHide(chargedModal);
});

paymentBtn?.addEventListener("click", () => {
  handleHide(chargeModal);
  setTimeout(() => {
    handleShow(chargedModal);
  }, 3000);
});
