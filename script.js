const dropdownToggle = document.querySelector(".navbar__dropdown--toggle");
const dropdownMenu = document.querySelector(".navbar__dropdown--menu");
const dropdownLink = document.querySelectorAll(".navbar__dropdown--menu a");
const overlay = document.querySelector(".navbar__overlay");
const navbarHamburgerBtn = document.querySelector('.navbar__hamburger--btn');
const navbarMenu = document.querySelector(".navbar__menu");

dropdownToggle.addEventListener("click", () => {
  dropdownMenu.classList.toggle("open");
  overlay.classList.toggle("open");
});

function closeDropdownMenu() {
  dropdownMenu.classList.remove("open");
  overlay.classList.remove("open");
}

dropdownLink.forEach((link) => {
  link.addEventListener("click", closeDropdownMenu);
});

overlay.addEventListener("click", closeDropdownMenu);

navbarHamburgerBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
  const isnavbarMenuOpen = navbarMenu.classList.contains('open');
  if (isnavbarMenuOpen) {
    navbarHamburgerBtn.textContent = "✕";
    navbarHamburgerBtn.style.color = "hsl(0, 95%, 8%)";
  }
  else {
    navbarHamburgerBtn.textContent = "☰";
    navbarHamburgerBtn.style.color = "hsl(0, 40%, 90%)";
  }
})