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

// Populate the dropdowns for both forms
populateDropdowns(1);
