document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav");
  const scrollButtons = document.querySelectorAll("[data-scroll]");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("burger--active");
      nav.classList.toggle("nav--open");
    });

    nav.addEventListener("click", (event) => {
      if (event.target instanceof HTMLElement && event.target.matches(".nav__link")) {
        burger.classList.remove("burger--active");
        nav.classList.remove("nav--open");
      }
    });
  }

  scrollButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const target = event.currentTarget;
      if (!(target instanceof HTMLElement)) return;
      const selector = target.getAttribute("data-scroll");
      if (!selector) return;

      const section = document.querySelector(selector);
      if (!section) return;

      section.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});

