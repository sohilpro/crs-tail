const info = document.getElementById("info");
const editInfo = document.getElementById("edit_info");
const editInfoSave = document.getElementById("save_change_info");
const editInfoBtn = document.querySelectorAll("#edit_info_btn");
const cancelEditInfoBtn = document.querySelectorAll("#cancel_edit_info");

const containerShowPassword = document.getElementById(
  "container_show_password"
);
const showEyeBtn = document.getElementById("show_eye");
const inputNewPassword = document.getElementById("input_password");

const handleShow = (elment) => {
  elment.classList.remove("hidden");
  elment.classList.add("flex");
};
const handleHide = (elment) => {
  elment.classList.add("hidden");
  elment.classList.remove("flex");
};

editInfoBtn?.forEach((element) => {
  element.addEventListener("click", () => {
    handleShow(editInfo);
    handleHide(info);
  });
});

cancelEditInfoBtn?.forEach((element) => {
  element.addEventListener("click", () => {
    handleShow(info);
    handleHide(editInfo);
  });
});

editInfoSave?.addEventListener("click", () => {
  handleShow(info);
  handleHide(editInfo);
});

showEyeBtn?.addEventListener("click", () => {
  if (inputNewPassword.type === "password") {
    inputNewPassword.type = "text";
  }
});
