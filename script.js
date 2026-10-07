const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const year = document.querySelector("#year");

if (year) year.textContent = String(new Date().getFullYear());

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  navigation?.classList.toggle("is-open", !isOpen);
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton?.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  });
});
