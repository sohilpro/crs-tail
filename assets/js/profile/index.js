import "../filter/nav-bar";
import "./wallet";
import "./information";
import "./transactions";
import "./tickets";
import "./support";

const showSubMenuElements = document.querySelectorAll("#show-sub-menu");

showSubMenuElements.forEach((el) => {
  el?.addEventListener("click", () => {
    // Get the data-id attribute from the clicked element
    const id = el.getAttribute("data-id");

    // Select the <tr> element with the specific data-id attribute
    const divElement = document.querySelector(`div[data-id="${id}"]`);

    // Hide all other div elements
    document.querySelectorAll("div[data-id]").forEach((div) => {
      if (div !== divElement) {
        div.classList.add("hidden");
      }
    });

    // Hide all other buttons' content and reset their icons/text
    showSubMenuElements.forEach((btn) => {
      if (btn !== el) {
        btn.innerHTML = `
          <span>مشاهده</span>
          <img src="/icons/UpdateMain/arrow-down-g.svg" alt="" />
        `;
      }
    });

    if (divElement) {
      // Toggle the hidden class on the corresponding row
      const isCurrentlyHidden = divElement.classList.contains("hidden");
      divElement.classList.toggle("hidden", !isCurrentlyHidden);

      // Update the inner HTML based on the current visibility state
      el.innerHTML = isCurrentlyHidden
        ? `
            <span>بستن</span>
            <img src="/icons/UpdateMain/arrow-up-g.svg" alt="" />
          `
        : `
            <span>مشاهده</span>
            <img src="/icons/UpdateMain/arrow-down-g.svg" alt="" />
          `;
    }
  });
});
