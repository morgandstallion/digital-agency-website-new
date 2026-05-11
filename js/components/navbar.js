export function initNavbar() {
  // hamburger menu

  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeBtn = document.querySelector(".close-btn");

  // Open the drawer
  hamburger.addEventListener("click", () => {
    mobileMenu.classList.add("open");
    hamburger.setAttribute("aria-expanded", "true");
  });

  // Close the drawer
  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  });
}
