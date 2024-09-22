const containerPassengers = document.getElementById(
  "ticket_container_passengers"
);
const addPassengersBtn = document.getElementById("add_passengers");
const addPassengerDropDown = document.getElementById("add_pasenger_drop_down");

const passengers = [
  {
    passenger: "Adult",
    delete: false,
  },
  {
    passenger: "Adult",
    delete: true,
  },
];

const toggleOpen = (event, el) => {
  el.classList.toggle("hidden");
};

function populateDropdowns(formId) {
  const daySelect = document.getElementById(`day${formId}`);
  for (let i = 1; i <= 31; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    daySelect.appendChild(option);
  }

  const monthSelect = document.getElementById(`month${formId}`);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  monthNames.forEach((month, index) => {
    const option = document.createElement("option");
    option.value = index + 1; // month is 1-based
    option.textContent = month;
    monthSelect.appendChild(option);
  });

  const yearSelect = document.getElementById(`year${formId}`);
  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 50; // Let's assume a 100-year range
  for (let i = currentYear; i >= startYear; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    yearSelect.appendChild(option);
  }
}

function render() {
  // Clear previous content
  containerPassengers.innerHTML = "";

  passengers.forEach((item, index) => {
    containerPassengers.insertAdjacentHTML(
      "beforeend",
      `<div class="flex flex-col">
        
                                        <div class="flex justify-between"><span
                                                class="text-lg font-bold leading-[2rem] text-[#1C0E07]">${
                                                  item.passenger
                                                }
                                            </span>
                                               <div id="delete_passenger" data-del="${index}" class="flex cursor-pointer ${
        item.delete ? "not" : "hidden"
      } gap-2 items-center">
                                            <span data-del="${index}" class="text[#514037] text-sm">
                                                حذف مسافر
                                            </span>
                                            <img data-del="${index}" src="/icons/UpdateMain/close-t.svg" alt="..."/>
                                </div>
                                        </div>
            
                                        <div class="grid grid-cols-1 lg:grid-cols-4 mt-5 gap-y-10 gap-x-2">
                                            <div class="relative mobile:w-full"><input type="text" placeholder="Enter first name"
                                                    id="name"
                                                    class="border-[#E1E2E4] hover:border-[#8CB8FB] focus:outline-none rounded-[1rem] h-12 w-[16rem] mobile:w-full border-[0.125rem] bg-white text-sm text-[#5B4A42] placeholder:text-[#A69F9B] px-5 pt-1 focus:border-[#307FF8]"><span
                                                    class="absolute -top-[0.55rem] rtl:right-[1.06rem] ltr:left-[1.06rem] text-xs text-[#5B4A42] leading-[1.25rem] bg-white px-1">First
                                                    Name</span><!----></div>
                                            <div class="relative mobile:w-full"><input type="text" placeholder="Enter last name"
                                                    id="l_name"
                                                    class="border-[#E1E2E4] hover:border-[#8CB8FB] focus:outline-none rounded-[1rem] h-12 w-[16rem] mobile:w-full border-[0.125rem] bg-white text-sm text-[#5B4A42] placeholder:text-[#A69F9B] px-5 pt-1 focus:border-[#307FF8]"><span
                                                    class="absolute -top-[0.55rem] rtl:right-[1.06rem] ltr:left-[1.06rem] text-xs text-[#5B4A42] leading-[1.25rem] bg-white px-1">Last
                                                    Name</span><!----></div>
            
                                            <div class="relative mobile:w-full">
            
                                                <select id="gender"
                                                    class="border-[#E1E2E4] hover:border-[#8CB8FB] focus:outline-none rounded-[1rem] h-12 w-[16rem] mobile:w-full border-[0.125rem] bg-white text-sm text-[#5B4A42] placeholder:text-[#A69F9B] px-5 pt-1 focus:border-[#307FF8] appearance-none"
                                                    name="gender">
                                                    <option value=" " selected hidden>Enter gender</option>
                                                    <option value="male">male</option>
                                                    <option value="female">female</option>
                                                </select>
                                                <span
                                                    class="absolute -top-[0.55rem] rtl:right-[1.06rem] ltr:left-[1.06rem] text-xs text-[#5B4A42] leading-[1.25rem] bg-white px-1">gender</span><!---->
            
                                                <img class="absolute right-3 top-3.5" src="/icons/UpdateMain/arrow.svg" alt="" />
                                            </div>
                                            <div class="relative mobile:w-full">
            
                                                <div id="birth-date${index}"
                                                    class="border-[#E1E2E4] hover:border-[#8CB8FB] focus:outline-none rounded-[1rem] h-12 w-[16rem] mobile:w-full border-[0.125rem] bg-white text-sm text-[#5B4A42] placeholder:text-[#A69F9B] px-5 py-1 focus:border-[#307FF8] divide-x-2 flex appearance-none"
                                                    name="birth-date">
                                                    <select id="day_birth${index}" class="appearance-none outline-none w-full ltr:pl-2">
                                                        <option value="tets" selected hidden>day</option>
                                                    </select>
            
                                                    <select id="month_birth${index}" class="appearance-none outline-none w-full ltr:pl-2">
                                                        <option value="tets" selected hidden>month</option>
                                                    </select>
                                                    <select id="year_birth${index}" class="appearance-none outline-none w-full ltr:pl-2">
                                                        <option value="tets" selected hidden>year</option>
                                                    </select>
                                                </div>
                                                <span
                                                    class="absolute -top-[0.55rem] rtl:right-[1.06rem] ltr:left-[1.06rem] text-xs text-[#5B4A42] leading-[1.25rem] bg-white px-1">birth
                                                    date</span><!---->
                                            </div>
            
                                            <div class="relative mobile:w-full"><input type="text" placeholder="Enter first name"
                                                    id="passport-number"
                                                    class="border-[#E1E2E4] hover:border-[#8CB8FB] focus:outline-none rounded-[1rem] h-12 w-[16rem] mobile:w-full border-[0.125rem] bg-white text-sm text-[#5B4A42] placeholder:text-[#A69F9B] px-5 pt-1 focus:border-[#307FF8]"><span
                                                    class="absolute -top-[0.55rem] rtl:right-[1.06rem] ltr:left-[1.06rem] text-xs text-[#5B4A42] leading-[1.25rem] bg-white px-1">Passport
                                                    Number</span><!----></div>
            
                                            <div class="relative mobile:w-full">
            
                                                <select id="nationality"
                                                    class="border-[#E1E2E4] hover:border-[#8CB8FB] focus:outline-none rounded-[1rem] h-12 w-[16rem] mobile:w-full border-[0.125rem] bg-white text-sm text-[#5B4A42] placeholder:text-[#A69F9B] px-5 pt-1 focus:border-[#307FF8] appearance-none"
                                                    name="gender">
                                                    <option value=" " selected hidden>Enter Nationality</option>
                                                    <option value="male">male</option>
                                                    <option value="female">female</option>
                                                </select>
                                                <span
                                                    class="absolute -top-[0.55rem] rtl:right-[1.06rem] ltr:left-[1.06rem] text-xs text-[#5B4A42] leading-[1.25rem] bg-white px-1">Nationality</span><!---->
            
                                                <img class="absolute right-3 top-3.5" src="/icons/UpdateMain/arrow.svg" alt="" />
                                            </div>
            
                                            <div class="relative mobile:w-full">
            
                                                <div id="expire-date${index}"
                                                    class="border-[#E1E2E4] hover:border-[#8CB8FB] focus:outline-none rounded-[1rem] h-12 w-[16rem] mobile:w-full border-[0.125rem] bg-white text-sm text-[#5B4A42] placeholder:text-[#A69F9B] px-5 py-1 focus:border-[#307FF8] divide-x-2 flex appearance-none"
                                                    name="expire-date">
                                                    <select id="day_expire${index}" class="appearance-none outline-none w-full ltr:pl-2">
                                                        <option value="tets" selected hidden>day</option>
                                                    </select>
            
                                                    <select id="month_expire${index}" class="appearance-none outline-none w-full ltr:pl-2">
                                                        <option value="tets" selected hidden>month</option>
                                                    </select>
                                                    <select id="year_expire${index}" class="appearance-none outline-none w-full ltr:pl-2">
                                                        <option value="tets" selected hidden>year</option>
                                                    </select>
                                                </div>
                                                <span
                                                    class="absolute -top-[0.55rem] rtl:right-[1.06rem] ltr:left-[1.06rem] text-xs text-[#5B4A42] leading-[1.25rem] bg-white px-1">Expiration
                                                    of passport</span><!---->
                                            </div>
            
                                            <div class="relative mobile:w-full">
            
                                                <select id="gender"
                                                    class="border-[#E1E2E4] hover:border-[#8CB8FB] focus:outline-none rounded-[1rem] h-12 w-[16rem] mobile:w-full border-[0.125rem] bg-white text-sm text-[#5B4A42] placeholder:text-[#A69F9B] px-5 pt-1 focus:border-[#307FF8] appearance-none"
                                                    name="gender">
                                                    <option value=" " selected hidden>Enter Passport issuing country</option>
                                                    <option value="male">male</option>
                                                    <option value="female">female</option>
                                                </select>
                                                <span
                                                    class="absolute -top-[0.55rem] rtl:right-[1.06rem] ltr:left-[1.06rem] text-xs text-[#5B4A42] leading-[1.25rem] bg-white px-1">Passport
                                                    issuing country</span><!---->
            
                                                <img class="absolute right-3 top-3.5" src="/icons/UpdateMain/arrow.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
        `
    );

    // Populate the dropdowns for both forms
    populateDropdowns(`_birth${index}`);
    populateDropdowns(`_expire${index}`);

    const deletePassengerBtn = document.querySelectorAll("#delete_passenger");

    deletePassengerBtn.forEach((i) => {
      i.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        const target = event.target.getAttribute("data-del");

        passengers.splice(target, 1);
        render();
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => render());

addPassengersBtn.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  // passengers.push({
  //   passenger: "Adults",
  //   delete: true,
  // });
  toggleOpen(event, addPassengerDropDown);

  render();
});
