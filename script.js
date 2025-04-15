//script menu mobile open menu and close menu
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
  menuBtn.classList.add("hidden");
  closeBtn.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
  menuBtn.classList.remove("hidden");
  closeBtn.classList.add("hidden");
});

//script text typed
document.addEventListener("DOMContentLoaded", function () {
  let typed = new Typed("#text_title", {
    strings: ["Junior Web Developer", "M. Dede Nanda Pratama"],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
  });
});

//untuk mengatur animasi bergantian untuk saat scroll akan bergantian animasi
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".animated");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // Hanya animasi sekali saat masuk viewport
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
});
