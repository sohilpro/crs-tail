const dialog = document.getElementById("dialog_filter");
const closeDialogBtn = document.getElementById("close-filter");
const showDialogBtn = document.getElementById("show-dialog-filter");
const showDialogBtnMobile = document.getElementById(
  "show-dialog-filter-mobile"
);
const clearBtn = document.getElementById("clear_filter");

const showCloseDialog = () => {
  dialog.classList.toggle("hidden");
};
const clickOutDialog = (event) => {
  if (event.target.closest("#inner_dialog_filter")) return;
  showCloseDialog();
};

showDialogBtn.addEventListener("click", showCloseDialog);
showDialogBtnMobile.addEventListener("click", showCloseDialog);
closeDialogBtn.addEventListener("click", showCloseDialog);
dialog.addEventListener("click", clickOutDialog);

const uncheckAll = () => {
  document
    .querySelectorAll('input[type="checkbox"]')
    .forEach((el) => (el.checked = false));
};

clearBtn.addEventListener("click", uncheckAll);
