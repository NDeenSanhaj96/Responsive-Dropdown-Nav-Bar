const dropdownToggle = document.querySelector(".navbar__dropdown--toggle");
const dropdownMenu = document.querySelector(".navbar__dropdown--menu");
const dropdownLink = document.querySelectorAll(".navbar__dropdown--menu a");

dropdownToggle.addEventListener("click", () => {
  dropdownMenu.classList.toggle("open");
});

function closeDropdownMenu() {
  dropdownMenu.classList.remove("open");
}

dropdownLink.forEach((link) => {
  link.addEventListener("click", closeDropdownMenu);
});
