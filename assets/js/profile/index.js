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
    const trElement = document.querySelector(`tr[data-id="${id}"]`);

    console.log(trElement);

    // Get the <td> element inside that <tr> element
    const tdElement = trElement.querySelector("td");

    // Toggle the hidden class on the corresponding row
    tdElement.classList.toggle("hidden");

    // Optional: Toggle the rotate-180 class for the arrow icon
    el.classList.toggle("rotate-180");
  });
});
