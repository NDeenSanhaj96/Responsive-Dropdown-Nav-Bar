const dropdownToggle = document.querySelector(".navbar__dropdown--toggle");
const dropdownMenu = document.querySelector(".navbar__dropdown--menu");
const dropdownLink = document.querySelectorAll(".navbar__dropdown--menu a");
const overlay = document.querySelector(".navbar__overlay");
const navbarHamburgerBtn = document.querySelector(".navbar__hamburger--btn");
const navbarMenu = document.querySelector(".navbar__menu");
const navbarCtaBtn = document.querySelector(".navbar__cta");

dropdownToggle.addEventListener("click", () => {
  dropdownMenu.classList.toggle("open");
  overlay.classList.toggle("open");
});

function closeNavbarMenu() {
  overlay.classList.remove("open");
  navbarMenu.classList.remove("open");
  navbarHamburgerBtn.textContent = "☰";
  navbarHamburgerBtn.style.color = "hsl(0, 40%, 90%)";
  dropdownMenu.classList.remove("open");
}

dropdownLink.forEach((link) => {
  link.addEventListener("click", closeNavbarMenu);
});

overlay.addEventListener("click", closeNavbarMenu);

navbarHamburgerBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
  const isnavbarMenuOpen = navbarMenu.classList.contains("open");
  if (isnavbarMenuOpen) {
    navbarHamburgerBtn.textContent = "✕";
    navbarHamburgerBtn.style.color = "hsl(0, 95%, 8%)";
    overlay.classList.add("open");
    navbarCtaBtn.addEventListener("click", closeNavbarMenu);
  } else {
    navbarHamburgerBtn.textContent = "☰";
    navbarHamburgerBtn.style.color = "hsl(0, 40%, 90%)";
    overlay.classList.remove("open");
    dropdownMenu.classList.remove("open");
  }
});

function closeDropdownMenu() {
  dropdownMenu.classList.remove('open');
  overlay.classList.remove('open');
}

document.addEventListener('keydown', (event) => {
  if (event.key === "Escape") {
    closeDropdownMenu();
  }
});